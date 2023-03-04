/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';

function CustomEditableTabs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        axios('http://localhost:3000/windowsData').then((res) =>
            setData(res.data)
        );
    };
    const columns = [
        {
            dataField: 'solicitante',
            text: 'Solicitante',
        },
        {
            dataField: 'estado',
            text: 'Estados',
            formatter: (col, row) => {
                return (
                    <span
                        style={{
                            display: 'block',
                            width: 200,
                        }}
                    >
                        {col}
                    </span>
                );
            },
            editor: {
                type: Type.SELECT,
                options: [
                    { value: 'Ejecutado Ok', label: 'Ejecutado Ok' },
                    {
                        value: 'Ejecutado Ok(parcialmente exitoso)',
                        label: 'Ejecutado Ok(parcialmente exitoso)',
                    },
                    {
                        value: 'Ejecutado Ok (sigue con inconvenientes)',
                        label: 'Ejecutado Ok (sigue con inconvenientes)',
                    },
                    {
                        value: 'Ejecutado Ok(punto de mejora alarmas de bajo trafico)',
                        label: 'Ejecutado Ok(punto de mejora alarmas de bajo trafico)',
                    },
                    {
                        value: 'Ejecutado parcialmente(solo NGIN)',
                        label: 'Ejecutado parcialmente(solo NGIN)',
                    },
                    {
                        value: 'Ejecuto pero fallo(se reprograma)',
                        label: 'Ejecuto pero fallo(se reprograma)',
                    },
                    { value: 'Cancelado', label: 'Cancelado' },
                    {
                        value: 'Cancelado(colision con T3)',
                        label: 'Cancelado(colision con T3)',
                    },
                    {
                        value: 'Cancelado definitivamente',
                        label: 'Cancelado definitivamente',
                    },
                    {
                        value: 'Cancelado por mesa de cambios(ingreso fuera de fecha)',
                        label: 'Cancelado por mesa de cambios(ingreso fuera de fecha)',
                    },
                    {
                        value: 'Propuesto(analizar estrategia)',
                        label: 'Propuesto(analizar estrategia)',
                    },
                    { value: 'Reprogramado', label: 'Reprogramado' },
                    { value: 'Se Reprograma', label: 'Se Reprograma' },
                    { value: 'Rollback', label: 'Rollback' },
                    {
                        value: 'Rollback(avisar a seguridad por WAF)',
                        label: 'Rollback(avisar a seguridad por WAF)',
                    },
                ],
            },
        },
        {
            dataField: 'fechaImplementacion',
            text: 'Fecha de Implementacion',
        },

        {
            dataField: 'urgencia',
            text: 'Urgencia',
            formatter: (col, row) => {
                return (
                    <span
                        style={{
                            display: 'block',
                            width: 200,
                        }}
                    >
                        {col}
                    </span>
                );
            },
            editor: {
                type: Type.SELECT,
                options: [
                    { value: 'Critica', label: 'Critica' },
                    {
                        value: 'Alta',
                        label: 'Alta',
                    },
                    {
                        value: 'Alta para el negocio',
                        label: 'Alta para el negocio',
                    },
                    {
                        value: 'Media',
                        label: 'Media',
                    },
                    {
                        value: 'Baja',
                        label: 'Baja',
                    },
                ],
            },
        },
        {
            dataField: 'tipo',
            text: 'Tipo de trabajo',
        },
        {
            dataField: 'crq',
            text: 'CRQ',
        },
        {
            dataField: 'tipoCrq',
            text: 'Tipo CRQ',
        },
        {
            dataField: 'ownerCrq',
            text: 'Owner CRQ',
        },
        {
            dataField: 'ejecuta',
            text: 'Ejecuta-Tareas',
        },
        {
            dataField: 'controla',
            text: 'Controla',
        },
        {
            dataField: 'nuevaURL',
            text: 'Nueva URL o flujo',
        },
        {
            dataField: 'grupoSoporte',
            text: 'Grupo Soporte',
        },
        {
            dataField: 'pruevasPost',
            text: 'Pruebas Post',
            formatter: (col, row) => {
                return (
                    <span
                        style={{
                            display: 'block',
                            width: 200,
                            overflow: 'y',
                        }}
                    >
                        {col}
                    </span>
                );
            },
        },
        {
            dataField: 'afectaIDP',
            text: 'Afecta IDP',
            editor: {
                type: Type.SELECT,
                options: [
                    { value: 'SI', label: 'SI' },
                    {
                        value: 'NO',
                        label: 'NO',
                    },
                ],
            },
        },
        {
            dataField: 'impacto',
            text: 'Impacto-notificacion',
        },
        {
            dataField: 'componente',
            text: 'Componente',
        },
    ];
    return (
        <div className={styles.container}>
            <BootstrapTable
                keyField="id"
                data={data}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: 'dbclick',
                    blurToSave: true,
                })}
                striped
                hover
                condensed
            />
        </div>
    );
}

export default CustomEditableTabs;
