import { useRecoilState } from "recoil";
import { authState } from "../Store/auth";

const [auth, setAuth] = useRecoilState(authState);

export const config = {
    headers: {
        Authorization: "Bearer " + auth?.user.token,
    },
};