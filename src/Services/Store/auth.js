import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'data',
    storage: sessionStorage,
})

const authState = atom({
    key: 'auth',
    default: {
        auth: false,
        user: {}
    },
    effects_UNSTABLE: [persistAtom],
});

export { authState };