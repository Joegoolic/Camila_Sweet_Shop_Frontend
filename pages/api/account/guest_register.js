import { API_URL } from "../../../config/index";
import cookie from 'cookie';

export default async (req, res) => {
    if (req.method ==='POST'){
        try { const apiRes = await fetch(`${API_URL}/api/account/guest_register`,{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
        })

        const data = await apiRes.json();

        if (apiRes.status === 201){
            let response = res.status(201).json({success: data.success,info: data.info});
            //console.log(data.success, data.info)
            //console.log(data.info)
            //user_info = data.info
            //dispatch(login(user_info, user_info));
            return response
        }else{
            return res.status(apiRes.status).json({
                error: data.error
            });
        }
    } catch (err){
        return res.status(500).json({
            error: 'Something went wrong when registerting for an account'
        });
    }
    }else{
        res.setHeader('Allow',['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};