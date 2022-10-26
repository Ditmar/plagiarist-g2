import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { LoaderSpinnerContext } from "./LoaderSpinnerContext";


const LoaderSpinnerContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState(null);
    const [log, setLog] = useState('');
    useEffect(() => {
        const socket = io("http://localhost:3000");
        socket.on('serverresponse', (room) => {
          setCode(room);
          socket.emit('joinroom', room);
         })
        socket.on('msn', (msn) => {
            setLog(msn);
        })
       
       return () => {
        socket.off('msn')
        socket.off('serverresponse')
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
       }
    }, []);
    return <LoaderSpinnerContext.Provider value={{isLoading, setIsLoading, code, log}}>
        { children }
    </LoaderSpinnerContext.Provider>
}
export default LoaderSpinnerContextProvider;