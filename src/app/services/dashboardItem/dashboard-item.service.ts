import { Injectable } from '@angular/core';
import { PropertiesDashboardItem } from '../../components/dashboard-item/dashboard-item.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardItemService {

  constructor() { }

  getItemsRegistroCPE(): PropertiesDashboardItem[] {

    return [{
      id:1,
      e: true,
      icon: "fas fa-envelope-open-text",
      bottomText: "Correos",
      colorIcon: "#93b7d6",
      topTitle: "-Recepción",
      topSubTitle: "Recepción de Documentos",
      path:"/home/correo"
    },
      {
        id:3,
        e: true,
        icon: "fas fa-tasks",
        bottomText: "Historial",
        colorIcon: "#93b7d6",
        topTitle: "-Analista",
        topSubTitle: "Detalles de Comprobante Electrónicos",
        path:"/home/analista"
      },
  
      {
        id:5,
        e: true,
        icon: "fas fa-clipboard-list text-danger",
        bottomText: "Listado y Visualización",
        colorIcon: "#93b7d6",
        topTitle: "-Verificacion CPE",
        topSubTitle: "Contabilizar Facturas",
        path:"/home/contabilizacion/lista"
      },
  
      {
        id:5,
        e: true,
        icon: "fas fa-clipboard-list text-danger",
        bottomText: "Listado y Visualización",
        colorIcon: "#93b7d6",
        topTitle: "-Verificación CPE",
        topSubTitle: "Contabilizar RHE",
        path:"/home/contabilizacion/rhe"
      },
  
  
      {
        id:8,
        e: false,
        icon: "fas fa-clipboard-list",
        bottomText: "Contabilizar",
        colorIcon: "#93b7d6",
        topTitle: "Registro de Comprobantes",
        topSubTitle: "Cargar y Registrar",
        path:"/home/facturacion"
      },
  
  
      {
        id:2,
        e: false,
        icon: "fas fa-file",
        bottomText: "Anulación",
        colorIcon: "#FCAF4C",
        topTitle: "Anulación de Comprobantes",
        topSubTitle: "Visualizar y Contabilizar",
        path:"/home/contabilizacion/anulacion"
      },
  
  
      /*{
        id:2,
        e: false,
        icon: "fas fa-search",
        bottomText: "Busqueda de Comprobantes",
        colorIcon: "#93b7d6",
        topTitle: "Busqueda de Comprobantes",
        topSubTitle: "Busqueda de Comprobantes",
        path:"/home/facturacion"
      }*/
  
    ]
  
  }

  getServiciosIntegracion():PropertiesDashboardItem[]{


    return [
      {
        id:1,
        e: false,
        icon: "fas fa-clipboard-list",
        bottomText: "Reporte",
        colorIcon: "#93b7d6",
        topTitle: "Listado Comprobantes Contab.",
        topSubTitle: "Consulta por Periodo",
        path:"/home/contabilizacion/consulta"
      },
      {
        id:6,
        e: false,
        icon: "fas fa-clipboard-list",
        bottomText: "Gestión de la Compra",
        colorIcon: "#93b7d6",
        topTitle: "P2P Purchase To Pay",
        topSubTitle: "Compra al Pago ",
        path:"/home/estadocuenta"
      }
  /*    {
        id:1,
        e: false,
        icon: "fas fa-clipboard-list text-danger",
        bottomText: "Incidencias",
        colorIcon: "#93b7d6",
        topTitle: "Log del Sistema",
        topSubTitle: "Correos Rechazados y Log de Errores",
        path:"/home/email/logs"
      },*/
     /* {
        id:1,
        e: false,
        icon: "fas fa-user-friends",
        bottomText: "Auditoria",
        colorIcon: "#93b7d6",
        topTitle: "Auditoria",
        topSubTitle: "Auditoria",
        path:"/home/auditoria"

      },*/

    ];

    /*return [

      {
        id:10,
        e: false,
        icon: "fas fa-compress-alt",
        bottomText: "Integracion",
        colorIcon: "#800000",
        topTitle: "Directorio de Integracion",
        topSubTitle: "Generacion de Integracion "
      },
      {
        id:11,
        e: false,
        icon: "fas fa-tasks",
        bottomText: "Servicios",
        colorIcon: "#800000",
        topTitle: "Servicios",
        topSubTitle: "Servicios"
      }

    ]*/

    }


    getMaestros():PropertiesDashboardItem[]{
    return[{

      id:6,
      e: false,
      icon: "fas fa-table",
      bottomText: "Tipo de Cambio",
      colorIcon: "#93b7d6",
      topTitle: "Tipo de Cambio",
      topSubTitle: "Tipo de Cambio",
      path:"/home/maestros"


    },{

      id:6,
      e: false,
      icon: "fas fa-clipboard-list",
      bottomText: "Generacion de Actas",
      colorIcon: "#93b7d6",
      topTitle: "Generacion de Actas",
      topSubTitle: "Generacion de Actas",
      path:"/home/actas"

    }

    ]


    }


    getAdministrador():PropertiesDashboardItem[]{
      return [ {
        id:6,
        e: false,
        icon: "fas fa-cloud-upload",
        bottomText: "Documentos",
        colorIcon: "#93b7d6",
        topTitle: "Modulo de Entrenamiento",
        topSubTitle: "cargar tipos de documento para validar",
        path:"/home/entrenamiento"
      },
        /*{
          id:7,
          e: false,
          icon: "fas fa-mail-bulk",
          bottomText: "Envio/Recepcion",
          colorIcon: "#800000",
          topTitle: "Procesos",
          topSubTitle: "Lista de procesos en ejecucion"
        }*/ {

          id:8,
          e: false,
          icon: "fas fa-users-cog",
          bottomText: "Perfiles/Accesos",
          colorIcon: "#93b7d6",
          topTitle: "Administrador Usuarios",
          topSubTitle: "Creacion/Modificacion",
          path:"/home/reporte"
        },{
          id:8,
          e: false,
          icon: "fas fa-cogs",
          bottomText: "Configuración del Sistema",
          colorIcon: "#93b7d6",
          topTitle: "Configuración del Sistema",
          topSubTitle: "Configuración",
          path:"/home/configuracion"
        }
        ]
    }

}


