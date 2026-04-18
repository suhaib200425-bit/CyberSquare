import axios from "axios";
import { MeadiApi } from "../../assets/Api";

export const uploadFile = async (file) => {
    const fd = new FormData();
    fd.append("files", file);

    const res = await axios.post(
        MeadiApi,
        fd
    );

    return res.data[0].id; // 👈 important
};