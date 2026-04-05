import { render } from "../config/viewEngine";
import * as model from "../models/mahasiswaModel";

export const home = async (c) => {
    const dataMahasiswa = await model.getAll();

    const html = await render("home", {
        title: "Dashboard Bun MVC",
        mahasiswa: dataMahasiswa,
        totalMahasiswa: dataMahasiswa.length,
    }, c);

    return c.html(html);
};