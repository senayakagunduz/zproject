import React, { useEffect, useState } from "react";
import CustomRoutes from "./router/custom-routers.js";
import { getUser } from "./api/user-service.js";
import { useAppDispatch } from "./store/slices/hooks.js";
import { loginFailed, loginSuccess } from "./store/slices/auth-slice.js";
import Loading from "./components/common/loading/loading.js";
import { encryptedLocalStorage } from "./helpers/functions/encrypt-storage.js";

//Eğer elimizde token varsa kullanıcı datalarını bana getir
//geneli ilgilendiren yerler,
//sepet bilgileri backendde durur, kullanıcı giriş yaptığında hemen sepetteki verilerini çekeceği yer app dir.çünkü ilk buraya girer
//initial değerleri çekeceğimiz yer burasıdır
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch=useAppDispatch();

  const loadData = async() => {
  
   
    try {
      const token = encryptedLocalStorage.getItem("token");
      if(token){
        const resp=await getUser();
        dispatch(loginSuccess(resp.data));
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailed());
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      {loading ? <Loading/> : <CustomRoutes />}
    </div>
  );
};

export default App;
