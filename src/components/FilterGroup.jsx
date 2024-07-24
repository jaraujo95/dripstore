import { Checkbox, Radio } from "@mui/material"
import * as React from 'react';

export default function FilterGroup() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <section className="flex-col items-start justify-start w-[350px] px-10">
            <p className="text-xl font-semibold pb-5 pt-5 ml-3">Filtrar por</p>
            <div className="border-t-2 pt-5 ml-3"></div>
            <div className="flex flex-col">
                <div>
                    <div className="flex flex-col gap-1 pb-5">
                        <p className="font-semibold ml-3">Marca</p>
                        <div>
                            <div className="flex flex-row items-center">
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Adidas</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Balenciaga</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>K-Swiss</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Nike</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Puma</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pb-5">
                        <p className="font-semibold ml-3">Categoria</p>
                        <div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Esporte e lazer</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Casual</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Utilitario</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Corrida</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pb-5">
                        <p className="font-semibold ml-3">Gênero</p>
                        <div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Masculino</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Feminino</label>
                            </div>
                            <div className="flex flex-row items-center ">
                                <Checkbox

                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Unisex</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pb-5">
                        <p className="font-semibold ml-3">Estado</p>
                        <div>
                            <div className="flex flex-row items-center">
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Novo</label>
                            </div>
                            <div className="flex flex-row items-center">
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="b"
                                    name="radio-buttons"
                                    sx={{
                                        color: "#666666",
                                        '&.Mui-checked': {
                                            color: "#C92071",
                                        },
                                    }}
                                />
                                <label>Usado</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}