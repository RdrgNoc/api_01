'use strict';
const timingNoty = 3500;
var idUser = $("#MainContent_hddnIdUsuario").val();
var idRolUser = $("#MainContent_hddnPage").val();
var cveOSd = $("#MainContent_hddnOS").val().trim();
var cveUPd = $("#MainContent_hddnUP").val().trim();
var cveEfiscald = $("#MainContent_hddnEfiscal").val().trim();

const accord01 = $("#accordionInsert");
const divAlineacion = $("#divAlineacion");
const divRiesgo = $("#divRiesgo");
const divFactorRiesgo = $("#divFactoresRiesgo");
const divControlesFactor = $("#divControlesFactor");
const divAccionesControl = $("#divAccionesControl");
const divActividadesAccion = $("#divActividadesAccion");
const divEvidenciaActividad = $("#divEvidenciaActividad");

const divForFile = $("#divInputArchivo");
const inputFile = $("#customFile");
const divForLink = $("#divInputEnlace");
const inputLink = $("#txtUrl");

var __lur = [
    'WebFrmPTAR001.aspx/getAllData', //[0]
    'WebFrmPTAR001.aspx/getEfiscalCombo', //[1]
    'WebFrmPTAR001.aspx/getOSCombo', //[2]
    'WebFrmPTAR001.aspx/getUPCombo', //[3]
    'WebFrmPTAR001.aspx/getAlineacionCombo', //[4]
    'WebFrmPTAR001.aspx/setAlineacion', //[5]
    'WebFrmPTAR001.aspx/getProcesoCombo', //[6]
    'WebFrmPTAR001.aspx/getNivelRiesgoCombo', //[7]
    'WebFrmPTAR001.aspx/getClasRiesgoCombo', //[8]
    'WebFrmPTAR001.aspx/getImpactoCombo', //[9]
    'WebFrmPTAR001.aspx/getProbabilidadCombo', //[10]
    'WebFrmPTAR001.aspx/getCuadranteCombo', //[11]
    'WebFrmPTAR001.aspx/getEstrategiaCombo', //[12]
    'WebFrmPTAR001.aspx/getControlCombo', //[13]
    'WebFrmPTAR001.aspx/getDataProceso', //[14]
    'WebFrmPTAR001.aspx/setRiesgo', //[15]
    'WebFrmPTAR001.aspx/getDataCtrlAlineacion', //[16]
    'WebFrmPTAR001.aspx/getClasFactorCombo', //[17]
    'WebFrmPTAR001.aspx/getTipoFactorCombo', //[18]
    'WebFrmPTAR001.aspx/getDataCtrlFactor', //[19]
    'WebFrmPTAR001.aspx/setFactor', //[20]
    'WebFrmPTAR001.aspx/getDataCtrlControl', //[21]
    'WebFrmPTAR001.aspx/getDataFactorById', //[22]
    'WebFrmPTAR001.aspx/getTipoControlCombo', //[23]
    'WebFrmPTAR001.aspx/getDeterminacionCombo', //[24]
    'WebFrmPTAR001.aspx/setControl', //[25]
    'WebFrmPTAR001.aspx/getDataCtrlAccion', //[26]
    'WebFrmPTAR001.aspx/getDataControlById', //[27]
    'WebFrmPTAR001.aspx/setAccion', //[28]
    'WebFrmPTAR001.aspx/getDataAccionById', //[29]
    'WebFrmPTAR001.aspx/getDataCtrlActividad', //[30]
    'WebFrmPTAR001.aspx/getTrimestreCombo', //[31]
    'WebFrmPTAR001.aspx/getTipoReporteCombo', //[32]
    'WebFrmPTAR001.aspx/setActividad', //[33]
    'WebFrmPTAR001.aspx/getDataActividadById', //[34]
    'WebFrmPTAR001.aspx/getDataCtrlEvidencia', //[35]
    'WebFrmPTAR001.aspx/getTipoDocumentoCombo', //[36]
    'WebFrmPTAR001.aspx/setEvidenciaDoc', //[37]
    'WebFrmPTAR001.aspx/setEvidenciaUrl', //[38]
    'WebFrmPTAR001.aspx/getDocumentoEvidencia', //[39]
    'WebFrmPTAR001.aspx/getDataCtrlRiesgo', //[40]
    'WebFrmPTAR001.aspx/getDataAlineacionById', //[41]
    'WebFrmPTAR001.aspx/getResponsableCombo', //[42]
    'WebFrmPTAR001.aspx/getMesesCombo', //[43]
    'WebFrmPTAR001.aspx/getDataMatriz', //[44]
    'WebFrmPTAR001.aspx/getDataPtar', //[45]
    'WebFrmPTAR001.aspx/getDataMapa', //[46]
    'WebFrmPTAR001.aspx/getDataConcentrado', //[47]
    'WebFrmPTAR001.aspx/getDataRiesgoById', //[48]
    'WebFrmPTAR001.aspx/updateRiesgo', //[49]
    'WebFrmPTAR001.aspx/showFactores_X_Riesgo', //[50]
    'WebFrmPTAR001.aspx/updateRiesgo_2', //[51]
    'WebFrmPTAR001.aspx/getDataRiesgo_X_Datos', //[52]
    'WebFrmPTAR001.aspx/updateRiesgo_3', //[53]
    'WebFrmPTAR001.aspx/getObservaciones', //[54]
    'WebFrmPTAR001.aspx/setSolventaObser', //[55]
    'WebFrmPTAR001.aspx/getDataByIdRiesgo_X_Datos', //[56]
];

function dialog() {
    const modals = $('#staticBackdrop1').modal();
    $('#staticBackdrop1').modal('show');
    $('#staticBackdrop1').modal('handleUpdate');
}

function dialog2() {
    const modals = $('#staticBackdrop2').modal();
    $('#staticBackdrop2').modal('show');
    $('#staticBackdrop2').modal('handleUpdate');
}

function validateFilePdf(input) {
    const fileName = input.value;

    const allowedExtensions = /(\.pdf)$/i;

    if (!allowedExtensions.exec(fileName)) {
        new Noty(setMessage('Por favor, seleccione un archivo con extensión .pdf.', 'error', 'topCenter', timingNoty)).show();
        input.value = '';
        return false;
    }

    new Noty(setMessage('Archivo valido.', 'success', 'topCenter', timingNoty)).show();
    return true;
}

function validateFileWord(input) {
    const fileName = input.value;

    // Extensiones permitidas: .doc y .docx
    const allowedExtensions = /\.(doc|docx)$/i;

    if (!allowedExtensions.exec(fileName)) {
        new Noty(setMessage('Por favor, seleccione un archivo con extensión .doc o .docx.', 'error', 'topCenter', timingNoty)).show();
        input.value = '';
        return false;
    }

    new Noty(setMessage('Archivo válido.', 'success', 'topCenter', timingNoty)).show();
    return true;
}

function validateUrl(input) {
    const url = input.value.trim();

    // Protocolos permitidos
    const protocolRegex = /^https?:\/\//i;

    if (!protocolRegex.test(url)) {
        new Noty(setMessage('La URL debe comenzar con http:// o https://', 'error', 'topCenter', timingNoty)).show();
        input.value = '';
        return false;
    }

    new Noty(setMessage('URL válida.', 'success', 'topCenter', timingNoty)).show();
    return true;
}

function getFileExtension(fileName) {
    const parts = fileName.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : null;
}

function mostrarError(idElemento, mensaje) {
    const elemento = $("#" + idElemento);
    new Noty(setMessage(mensaje, 'error', 'topCenter', timingNoty)).show();
}

function setDataAlineacion(idAlineacion, txtAlineacion, idCtrlAlineacion, cveOS, cveUP, eFiscal, Folio) {
    const dataLocal = "{ '_idAlineacion' : '" + idAlineacion + "', '_idUsuario' : '" + idUser + "', '_txtAlineacion' : '" + txtAlineacion + "', '_idCtrlAlineacion' : '" + idCtrlAlineacion + "', '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "', '_Efiscal' : '" + eFiscal + "', '_txtNoRiesgo' : '" + Folio + "' }";
    //console.log(dataLocal);
    //divRiesgo.show();
    $.ajax({
        url: __lur[5],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                $("#btnS_Riesgo").attr("data-res", `${splitRes[1]}`)
                $("#btnS_Riesgo").attr("data-fin", `${0}`)
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Alineacion").attr("disabled", false);
}

function setDataRiesgo(dataLocal) {
    // console.log(dataLocal);
    $.ajax({
        url: __lur[15],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto el riesgo.", 'success', 'topCenter', timingNoty)).show();
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error.", 'error', 'topCenter', timingNoty)).show();
            }

            getChartData($("#cboOs").val(), $("#cboUp").val(), 'printPage', 'null', 1);
            getRiesgosTable($("#cboOs").val(), $("#cboUp").val());
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Riesgo").removeAttr("disabled");
}

function setDataFactor(dataLocal) {
    // console.log(dataLocal);
    $.ajax({
        url: __lur[20],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto el factor.", 'success', 'topCenter', timingNoty)).show();

                $("#cboClasFactor").val(0);
                $("#cboControlFactor").val(0);
                $("#cboTipoFactor").val(0);
                $("#txtFactorRiesgo").val("")
                $("#btnS_Factor").attr("data-ctrl-factor", 0);
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos del factor.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Factor").removeAttr("disabled");
}

function setDataControl(dataLocal) {
    console.log(dataLocal);
    $.ajax({
        url: __lur[25],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto el control.", 'success', 'topCenter', timingNoty)).show();

                $("#cboTipoControl").val(0);
                $("#cboDeterminacion").val(0);
                $("#cboControlDocumentado").val(0);
                $("#cboControlFormalizado").val(0);
                $("#cboControlAplica").val(0);
                $("#cboControlEfectivo").val(0);
                $("#txtDescControlFactor").val("")
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos del control.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Control").removeAttr("disabled");
}

function setDataAccion(dataLocal) {
    // console.log(dataLocal);
    $.ajax({
        url: __lur[28],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto la acción.", 'success', 'topCenter', timingNoty)).show();

                $("#txtDescAccion").val("")
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos de la acción.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Accion").removeAttr("disabled");
}

function setDataActividad(dataLocal) {
    console.log(dataLocal);
    $.ajax({
        url: __lur[33],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto la actividad.", 'success', 'topCenter', timingNoty)).show();

                //$("#txtResponsableActividad").val("")
                $("#txtDescActividad").val("")
                $("#cboResponsable").val(0);
                //$("#cboTrimestre").val(0);
                //$("#cboTipoReporte").val(0);
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos de la actividad.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Actividad").removeAttr("disabled");
}

function setDataEvidencia(dataLocal, idDocumento) {
    var urlsend = "";
    if (idDocumento === "1" || idDocumento === "2") {
        urlsend = __lur[37]
    } else if (idDocumento === "3") {
        urlsend = __lur[38]
    }
    $.ajax({
        url: urlsend,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se inserto la evidencia.", 'success', 'topCenter', timingNoty)).show();

                $("#txtDescEvidencia").val("")
                $("#txtUrl").val("")
                $("#cboDocumento").val(0);
                $("#customFile").val("");
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos de la evidencia.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
    $("#btnS_Actividad").removeAttr("disabled");
}

function updateRiesgo(dataLocal) {
    $.ajax({
        url: __lur[49],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se insertaron los valores correstamente.", 'success', 'topCenter', timingNoty)).show();
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos del riesgo.", 'error', 'topCenter', timingNoty)).show();
            }
            getChartData($("#cboOs").val(), $("#cboUp").val(), 'printPage', 'null', 1);
            getRiesgosTable($("#cboOs").val(), $("#cboUp").val());
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function updateRiesgo2(dataLocal) {
    $.ajax({
        url: __lur[51],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se insertaron los valores correstamente.", 'success', 'topCenter', timingNoty)).show();
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos del riesgo.", 'error', 'topCenter', timingNoty)).show();
            }
            getChartData($("#cboOs").val(), $("#cboUp").val(), 'printPage', 'null', 1);
            getRiesgosTable($("#cboOs").val(), $("#cboUp").val());
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function updateRiesgo3(dataLocal) {
    $.ajax({
        url: __lur[53],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: dataLocal,
        async: false,
        success: function (result) {
            const splitRes = result.d.split("|");
            if (splitRes[0] === "ok") {
                new Noty(setMessage("Se enviaron los riesgos a revisión.", 'success', 'topCenter', timingNoty)).show();
            } else if (splitRes[0] === "error") {
                new Noty(setMessage("Ocurrio un error al insertar los datos del riesgo.", 'error', 'topCenter', timingNoty)).show();
            } else if (splitRes[0] === "empty") {
                new Noty(setMessage("No puede enviar su información .", 'error', 'topCenter', timingNoty)).show();
            }
            getDataSys($("#cboOs").val(), $("#cboUp").val());
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataSys(cveOS, cveUP) {
    var html = '';
    $.ajax({
        url: __lur[0],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
        async: false,
        //data: null,
        success: function (result) {
            const datos = result.d;
            console.log(datos);
            if (datos !== 'error') {
                if (datos.length !== 0) {
                    new Noty(setMessage("El riesgo contiene datos.", 'info', 'topCenter', timingNoty)).show();
                    datos.forEach(function (item) {
                        var envio__ = item.SN_ENVIADO === true ? 'disabled' : '';
                        var linkColor = item.SN_TERMINADO === 1 ? 'btn-falcon-info' : 'btn-falcon-default';
                        var descRiesgo = item.SN_TERMINADO === 1 ? 'Ver riesgo' : 'Insertar riesgo';
                        var snValida = item.SN_VALIDA === true ? 'badge-subtle-success' : 'badge-subtle-danger';

                        if (envio__ === 'disabled') {
                            if (item.SN_VALIDA === true || item.SN_VALIDA === null) {
                                envio__ = 'disabled';
                            } else {
                                envio__ = '';
                            }
                        } else {
                            if (item.SN_VALIDA === true) {
                                envio__ = 'disabled';
                            } else {
                                envio__ = '';
                            }
                        }

                        html += `<tr>
                                    <td class='text-1000'>${item.CONSECUTIVO}</td>
                                    <td class='text-1000'>${item.DESC_ALINEACION}</td>
                                    <td><span class='badge badge rounded-pill d-block p-2 ${snValida}'>${item.SN_VALIDA === true ? 'Validado' : 'No validado'}</span></td>
                                    <td class='text-end'>
                                        <div>
                                            <button class='btn btn-sm ${linkColor} btnSeeDatosAlineacion customButton' type='button' data-ctrl-alineacion='${item.ID_CTRL_ALINEACION}' data-ctrl-alineacion2='${item.SN_TERMINADO}'>${descRiesgo}</button>
                                            <button class='btn btn-sm btn-falcon-warning btnEditDatosAlineacion customButton ${envio__}' type='button' data-ctrl-alineacion='${item.ID_CTRL_ALINEACION}' data-ctrl-alineacion2='${item.SN_TERMINADO}'>Editar alineación</button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    recargarTabla("tableAlineaciones", html);

                    const enviadoARevision = datos.some(item => item.SN_ENVIADO === true);
                    const rechazados = datos.some(item => item.SN_VALIDA === false);
                    const validados = datos.some(item => item.SN_VALIDA === true);
                    const foliosSolventados = datos.some(item => item.SN_SOLVENTA === true && item.SN_ENVIADO === false && item.SN_VALIDA === false);
                    const foliosARechazo = datos.filter(item => item.SN_ENVIADO === false && item.SN_VALIDA === false).map(item => item.CONSECUTIVO).join(', ');
                    const foliosValidados = datos.filter(item => item.SN_ENVIADO === false && item.SN_VALIDA === true).map(item => item.CONSECUTIVO).join(', ');
                    const noEnviado = datos.some(item => item.SN_ENVIADO === null);

                    console.log(enviadoARevision);
                    console.log(rechazados);
                    console.log(validados);
                    console.log(noEnviado);
                    console.log(foliosSolventados);

                    if (enviadoARevision) {
                        const foliosARevision = datos.filter(item => item.SN_ENVIADO === true).map(item => item.CONSECUTIVO).join(', ');
                        new Noty(setMessage(`Los siguientes riesgos fueron sometidos a revisión: ${foliosARevision}.`, 'info', 'topCenter', 10000)).show();
                        if (foliosARevision) { // RIESGOS ENVIADOS A REVISIÓN
                            $("#btnSendToValidate").attr("disabled", true);
                            $("#btnNewInsert").attr("disabled", true);
                            if (rechazados) { // RIESGOS NO VALIDADOS
                                $("#btnSendToValidate").removeAttr("disabled");
                                if (foliosSolventados) {
                                } else {
                                    new Noty(setMessage(`Los siguientes riesgos fueron rechazados, favor de revisar: ${foliosARechazo}.`, 'warning', 'topCenter', 10000)).show();
                                }       
                            } else {
                                $("#btnSendToValidate").attr("disabled", true);
                                $("#btnNewInsert").attr("disabled", true);
                            }
                        } else {
                            $("#btnSendToValidate").removeAttr("disabled");
                        }
                    } else {
                        // if (foliosSolventados) {
                        // } else {
                        //     new Noty(setMessage(`Los siguientes riesgos fueron rechazados, favor de revisar: ${foliosARechazo}.`, 'warning', 'topCenter', 10000)).show();
                        // }
                        if (noEnviado) {
                            $("#btnSendToValidate").attr("disabled", true);
                            $("#btnNewInsert").removeAttr("disabled");
                            if (datos.length !== 0) {
                                $("#btnSendToValidate").removeAttr("disabled");
                            }
                        } else {
                            $("#btnSendToValidate").removeAttr("disabled");
                            $("#btnNewInsert").attr("disabled", true);
                            if (validados) {
                                new Noty(setMessage(`Los siguientes riesgos fueron validados: ${foliosValidados}.`, 'info', 'topCenter', 10000)).show();
                                if (rechazados) { // RIESGOS NO VALIDADOS
                                    $("#btnSendToValidate").removeAttr("disabled");
                                } else {
                                    $("#btnSendToValidate").attr("disabled", true);
                                    $("#btnNewInsert").attr("disabled", true);
                                }
                                //$("#btnGetMatriz").attr("data-ctrl-validate", "V");
                                $("#btnGetPtar").attr("data-ctrl-validate", "V");
                                $("#btnGetMapa").attr("data-ctrl-validate", "V");
                                $("#btnGetConcentrado").attr("data-ctrl-validate", "V");
                            } else {
                                if (rechazados) { // RIESGOS NO VALIDADOS
                                    $("#btnSendToValidate").removeAttr("disabled");
                                    if (foliosSolventados) {
                                    } else {
                                        new Noty(setMessage(`Los siguientes riesgos fueron rechazados, favor de revisar: ${foliosARechazo}.`, 'warning', 'topCenter', 10000)).show();
                                    }       
                                } else {
                                    $("#btnSendToValidate").attr("disabled", true);
                                    $("#btnNewInsert").attr("disabled", true);
                                }
                                new Noty(setMessage(`Los siguientes riesgos fueron rechazados, favor de revisar: ${foliosARechazo}.`, 'warning', 'topCenter', 10000)).show();
                            }    
                        }

                        // if (rechazados) { // RIESGOS NO VALIDADOS
                        //     $("#btnSendToValidate").removeAttr("disabled");
                        //     $("#btnNewInsert").attr("disabled", true);
                        // } else {
                        //     $("#btnSendToValidate").attr("disabled", true);
                        //     $("#btnNewInsert").attr("disabled", true);
                        // }
                    }
                } else {
                    $("#btnSendToValidate").attr("disabled", true);
                    $("#btnGroupVerticalDrop1").attr("disabled", true);
                    recargarTabla("tableAlineaciones", null);
                    new Noty(setMessage("Sin datos de riesgos en la alineación, favor de registrar los datos restantes.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataProceso(idProceso, OS, UP) {
    $.ajax({
        url: __lur[14],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ 'idProceso' : '" + idProceso + "', '_OS' : '" + OS + "', '_UP' : '" + UP + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                if (datos.length === 1) {
                    datos.forEach(function (item) {
                        $("#txtOSProceso").val(item.OSParticipante)
                        $("#txtUPProceso").val(item.UPParticipante)
                    });
                } else {
                    new Noty(setMessage("Ocurrio un error al obtener los resultados.", 'error', 'topCenter', timingNoty)).show();
                }

            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataAlineacionCount(cveOS, cveUP) {
    var html = '';
    $.ajax({
        url: __lur[0],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
        async: false,
        //data: null,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                if (datos.length !== null) {
                    $("#txtNoFolio").val(`${cveUP}.${datos.length + 1}`);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataAlineacion(idCtrlAlineacion, btnES) {
    $.ajax({
        url: __lur[16],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlAlineacion' : '" + idCtrlAlineacion + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                if (datos.length === 1) {
                    new Noty(setMessage("Su alineacion contiene datos.", 'info', 'topCenter', timingNoty)).show();

                    if (btnES === 0) { //VER DATOS
                        $("#cboProceso").val(datos[0].ID_PROCESO).attr("disabled", true);
                        $("#cboNivelRiesgo").val(datos[0].ID_NIVEL_RIESGO).attr("disabled", true);
                        $("#cboClasRiesgo").val(datos[0].ID_CLAS_RIESGO).attr("disabled", true);
                        //$("#cboImpactoInicio").val(datos[0].ID_IMPACTO).attr("disabled", true);
                        //$("#cboProbabilidadInicio").val(datos[0].ID_PROBABILIDAD).attr("disabled", true);
                        //$("#cboCuadranteInicio").val(datos[0].ID_CUADRANTE);
                        //$("#cboEstrategia").val(datos[0].ID_ESTRATEGIA).attr("disabled", true);
                        //$("#cboControl").val(datos[0].ID_CONTROL).attr("disabled", true);
                        //$("#cboImpactoFin").val(datos[0].ID_IMPACTO_VALORACION_FINAL).attr("disabled", true);
                        //$("#cboProbabilidadFin").val(datos[0].ID_PROBABILIDAD_VALORACION_FINAL).attr("disabled", true);
                        //$("#cboCuadranteFin").val(datos[0].ID_CUADRANTE_VALORACION_FINAL)
                        $("#txtOSProceso").val(datos[0].CVE_OS);
                        $("#txtUPProceso").val(datos[0].CVE_UP);
                        $("#txtNoFolio").val(datos[0].NO_FOLIO_RIESGO);
                        $("#txtRiesgo").val(datos[0].DESC_RIESGO).attr("disabled", true);
                        //$("#txtPosibleRiesgo").val(datos[0].POSIBLE_EFECTO_RIESGO).attr("disabled", true);

                        $("#btnS_Riesgo").attr("disabled", true);
                        $("#btnE_Riesgo").removeAttr("disabled").attr("data-ctrl-alineacion", idCtrlAlineacion);
                        $("#btnN_Factor").removeAttr("disabled");
                        $("#btnN_Factor").attr("data-ctrl-riesgo", datos[0].ID_CTRL_RIESGO);
                        $("#divTxtRiesgo")[0].innerHTML = datos[0].DESC_RIESGO

                        if (datos[0].SN_ENVIADO === true || datos[0].SN_VALIDA === true) {
                            $("#btnE_Riesgo").attr("disabled", true);
                            $("#btnN_Factor").html("Ver factores");
                        } else {
                            $("#btnE_Riesgo").removeAttr("disabled").attr("data-ctrl-alineacion", idCtrlAlineacion);
                            $("#btnN_Factor").html("Insertar factores para este riesgo");
                        }
                    } else if (btnES === 1) { //EDITAR DATOS
                        $("#cboProceso").val(datos[0].ID_PROCESO).removeAttr("disabled");
                        $("#cboNivelRiesgo").val(datos[0].ID_NIVEL_RIESGO).removeAttr("disabled");
                        $("#cboClasRiesgo").val(datos[0].ID_CLAS_RIESGO).removeAttr("disabled");
                        //$("#cboImpactoInicio").val(datos[0].ID_IMPACTO).removeAttr("disabled");
                        //$("#cboProbabilidadInicio").val(datos[0].ID_PROBABILIDAD).removeAttr("disabled");
                        //$("#cboCuadranteInicio").val(datos[0].ID_CUADRANTE)
                        //$("#cboEstrategia").val(datos[0].ID_ESTRATEGIA).removeAttr("disabled");
                        //$("#cboControl").val(datos[0].ID_CONTROL).removeAttr("disabled");
                        //$("#cboImpactoFin").val(datos[0].ID_IMPACTO_VALORACION_FINAL).removeAttr("disabled");
                        //$("#cboProbabilidadFin").val(datos[0].ID_PROBABILIDAD_VALORACION_FINAL).removeAttr("disabled");
                        //$("#cboCuadranteFin").val(datos[0].ID_CUADRANTE_VALORACION_FINAL)
                        $("#txtOSProceso").val(datos[0].CVE_OS);
                        $("#txtUPProceso").val(datos[0].CVE_UP);
                        $("#txtNoFolio").val(datos[0].NO_FOLIO_RIESGO);
                        $("#txtRiesgo").val(datos[0].DESC_RIESGO).removeAttr("disabled");
                        //$("#txtPosibleRiesgo").val(datos[0].POSIBLE_EFECTO_RIESGO).removeAttr("disabled");

                        $("#btnS_Riesgo").removeAttr("disabled");
                        $("#btnS_Riesgo").attr("data-ctrl-riesgo", datos[0].ID_CTRL_RIESGO);
                        $("#btnE_Riesgo").attr("disabled", true);
                        $("#btnN_Factor").attr("disabled", true);
                        $("#divTxtRiesgo")[0].innerHTML = datos[0].DESC_RIESGO
                    }
                } else {
                    new Noty(setMessage("Su alineacion no contiene un riesgo, favor de ingresar los datos.", 'error', 'topCenter', timingNoty)).show();

                    $("#cboProceso").val(0).removeAttr("disabled");

                    $("#cboNivelRiesgo").val(0).removeAttr("disabled");
                    $("#cboClasRiesgo").val(0).removeAttr("disabled");
                    //$("#cboImpactoInicio").val(0).removeAttr("disabled");
                    //$("#cboProbabilidadInicio").val(0).removeAttr("disabled");
                    //$("#cboCuadranteInicio").val(0)
                    //$("#cboEstrategia").val(0).removeAttr("disabled");
                    //$("#cboControl").val(0).removeAttr("disabled");
                    //$("#cboImpactoFin").val(0).removeAttr("disabled");
                    //$("#cboProbabilidadFin").val(0).removeAttr("disabled");
                    //$("#cboCuadranteFin").val(0)
                    $("#txtOSProceso").val("");
                    $("#txtUPProceso").val("");
                    $("#txtNoFolio").val("");
                    $("#txtRiesgo").val("").removeAttr("disabled");
                    //$("#txtPosibleRiesgo").val("").removeAttr("disabled");

                    $("#btnS_Riesgo").removeAttr("disabled");
                    $("#btnN_Factor").attr("disabled", true);
                    $("#btnE_Riesgo").attr("disabled", true);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataAlineacionById(idAlineacion) {
    var html = "";
    $.ajax({
        url: __lur[41],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlAlineacion' : '" + idAlineacion + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1) {
                    $("#txtNoFolio").val(datos[0].CONSECUTIVO);
                    $("#cboAlineacion").val(datos[0].ID_ALINEACION);
                    $("#txtAlineacion").val(datos[0].DESC_ALINEACION);
                    $("#btnS_Alineacion").attr("data-ctrl-alineacion", datos[0].ID_CTRL_ALINEACION)
                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos de la alineación.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataFactor(idRiesgo) {
    $("#btnS_Control").attr("data-ctrl-control", 0);
    var html = "";
    var disabledSee = "";
    var disabledEdit = "";
    $.ajax({
        url: __lur[19],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlRiesgo' : '" + idRiesgo + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                if (datos.length === 1 && datos[0].ID_CTRL_FACTOR === null) {
                    $("#txtFolioFactor").val(`${datos[0].CONSECUTIVO}.${datos.length}`);
                    recargarTabla("tableFactores", null);
                    $("#btnE_ValorInicial").attr("disabled", true);
                } else {
                    datos.forEach(function (item) {
                        if (item.ID_CUADRANTE === null && item.ID_IMPACTO === null && item.ID_PROBABILIDAD == null) {
                            disabledSee = "disabled";
                        } else {
                            disabledEdit = "disabled";
                        }

                        if (item.ID_CUADRANTE_VALORACION_FINAL === null && item.ID_IMPACTO_VALORACION_FINAL === null && item.ID_PROBABILIDAD_VALORACION_FINAL == null) {
                            $("#btnE_ValorFinal").removeAttr("disabled");
                            $("#btnS_Control").removeAttr("disabled");
                        } else {
                            $("#btnE_ValorFinal").attr("disabled", true);
                            $("#btnS_Control").attr("disabled", true);
                        }

                        $("#txtFolioFactor").val(`${item.CONSECUTIVO}.${datos.length + 1}`);
                        html += `<tr>
                                    <td class='text-1000'>${item.FOLIO}</td>
                                    <td class='text-1000'>${item.DESC_FACTOR}</td>
                                    <td class='text-end'>
                                        <div>
                                            <button class='btn btn-sm btn-falcon-info customButton btnSeeDatosFactor ${disabledSee}' type='button' data-ctrl-factor='${item.ID_CTRL_FACTOR}' data-ctrl1='${item.FOLIO}' data-ctrl-riesgo='${item.ID_CTRL_RIESGO}'>Ver controles</button>
                                            <button class='btn btn-sm btn-falcon-warning customButton btnEditDatosFactor ${disabledEdit}' type='button' data-ctrl-factor='${item.ID_CTRL_FACTOR}' data-ctrl1='${item.FOLIO}' data-ctrl-riesgo='${item.ID_CTRL_RIESGO}'>Editar factor</button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    recargarTabla("tableFactores", html);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataFactorById(idFactor, Edit__) {
    var html = "";
    $.ajax({
        url: __lur[22],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlFactor' : '" + idFactor + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                if (datos.length === 1) {
                    $("#divTxtFactor")[0].innerHTML = datos[0].DESC_FACTOR;
                    $("#btnS_Control").attr("data-ctrl1", datos[0].ID_CTRL_FACTOR);
                    $("#btnCancel_Control").attr("data-ctrl1", datos[0].ID_CTRL_FACTOR);

                    if (Edit__ === 0) {
                        $("#cboClasFactor").val(0);
                        $("#cboControlFactor").val(0);
                        $("#cboTipoFactor").val(0);
                        $("#txtFactorRiesgo").val("")
                        $("#btnS_Factor").attr("data-ctrl-factor", 0);
                    } else {
                        $("#cboClasFactor").val(datos[0].ID_CLAS_FACTOR);
                        $("#cboControlFactor").val(datos[0].ID_CONTROL);
                        $("#cboTipoFactor").val(datos[0].ID_TIPO_FACTOR);
                        $("#txtFolioFactor").val(datos[0].FOLIO);
                        $("#txtFactorRiesgo").val(datos[0].DESC_FACTOR);
                    }

                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos del factor.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataControl(idFactor, numFolio) {
    getDataFactorById(idFactor, 0);
    var html = "";
    var disabledSee = "";
    var disabledEdit = "";
    $.ajax({
        url: __lur[21],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlFactor' : '" + idFactor + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1 && datos[0].ID_CTRL_CONTROL === null) {
                    $("#txtFolioControlFactor").val(`${numFolio}.${datos.length}`);
                    recargarTabla("tableControles", null);
                } else {
                    datos.forEach(function (item) {
                        var envio__ = item.SN_ENVIADO === true ? 'disabled' : '';

                        $("#txtFolioControlFactor").val(`${numFolio}.${datos.length + 1}`);

                        if (item.ID_CUADRANTE_VALORACION_FINAL === null && item.ID_IMPACTO_VALORACION_FINAL === null && item.ID_PROBABILIDAD_VALORACION_FINAL === null) {
                            disabledSee = "disabled"
                        } else {
                            if (envio__ === '' || item.ID_CUADRANTE_VALORACION_FINAL !== null) {
                                disabledEdit = 'disabled';
                            } else {
                                disabledEdit = "";
                            }
                            // if (item.SN_ENVIADO === true) {
                            //     disabledEdit = "disabled";
                            // } else {
                            //     disabledEdit = "";
                            // }
                        }

                        html += `<tr>
                                    <td class='text-1000'>${item.NO_CONTROL}</td>
                                    <td class='text-1000'>${item.DESC_CONTROL}</td>
                                    <td class='text-end'>
                                        <div>
                                            <button class='btn btn-sm btn-falcon-info customButton btnSeeDatosControl ${disabledSee}' type='button' data-ctrl-control='${item.ID_CTRL_CONTROL}' data-ctrl1='${item.NO_CONTROL}' data-ctrl-factor='${item.ID_CTRL_FACTOR}'>Ver acciones</button>
                                            <button class='btn btn-sm btn-falcon-warning customButton btnEditDatosControl ${disabledEdit}' type='button' data-ctrl-control='${item.ID_CTRL_CONTROL}' data-ctrl1='${item.NO_CONTROL}' data-ctrl-factor='${item.ID_CTRL_FACTOR}'>Editar control</button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    recargarTabla("tableControles", html);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataControlById(idControl, Edit__) {
    var html = "";
    $.ajax({
        url: __lur[27],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlControl' : '" + idControl + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1) {
                    $("#divTxtControl")[0].innerHTML = datos[0].NO_CONTROL + ' - ' + datos[0].DESC_CONTROL;
                    $("#btnS_Accion").attr("data-ctrl-control", datos[0].ID_CTRL_CONTROL);
                    $("#btnCancel_Accion").attr("data-ctrl-control", datos[0].ID_CTRL_CONTROL);

                    if (datos[0].SN_TERMINADO === 1) {
                        $("#btnS_Accion").attr("disabled", true);
                    } else if (datos[0].SN_TERMINADO === 0) {
                        $("#btnS_Accion").attr("data-ctrl-accion", 0);
                        $("#btnS_Accion").removeAttr("disabled");
                    }

                    if (Edit__ === 0) {
                        $("#cboTipoControl").val(0);
                        $("#cboDeterminacion").val(0);
                        $("#cboControlDocumentado").val(0);
                        $("#cboControlFormalizado").val(0);
                        $("#cboControlAplica").val(0);
                        $("#cboControlEfectivo").val(0);
                        $("#txtDescControlFactor").val("");
                    } else {
                        $("#cboTipoControl").val(datos[0].ID_TIPO_CONTROL);
                        $("#cboDeterminacion").val(datos[0].ID_DETERMINACION);
                        $("#cboControlDocumentado").val(datos[0].ESTA_DOCUMENTADO);
                        $("#cboControlFormalizado").val(datos[0].ESTA_FORMALIZADO);
                        $("#cboControlAplica").val(datos[0].SE_APLICA);
                        $("#cboControlEfectivo").val(datos[0].ES_EFECTIVO);
                        $("#txtFolioControlFactor").val(datos[0].NO_CONTROL);
                        $("#txtDescControlFactor").val(datos[0].DESC_CONTROL);
                    }
                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos del factor.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataAccion(idControl) {
    getDataControlById(idControl, 0);
    var html = "";
    $.ajax({
        url: __lur[26],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlControl' : '" + idControl + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1 && datos[0].ID_CTRL_CONTROL === null) {
                    recargarTabla("tableAcciones", null);
                } else {
                    datos.forEach(function (item) {
                        var envio__ = item.SN_ENVIADO === true || item.SN_VALIDA === true ? 'disabled' : '';

                        html += `<tr>
                                    <td class='text-1000'>${item.DESC_ACCION}</td>
                                    <td class='text-end'>
                                        <div>
                                            <button class='btn btn-sm btn-falcon-info customButton btnSeeDatosAccion' type='button' data-ctrl-accion='${item.ID_CTRL_ACCION}' data-ctrl-control='${item.ID_CTRL_CONTROL}' data-ctrl-no-control='${item.NO_CONTROL}'>Ver actividades</button>
                                            <button class='btn btn-sm btn-falcon-warning customButton btnEditDatosAccion ${envio__}' type='button' data-ctrl-accion='${item.ID_CTRL_ACCION}' data-ctrl-control='${item.ID_CTRL_CONTROL}' data-ctrl-no-control='${item.NO_CONTROL}'>Editar acción</button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    recargarTabla("tableAcciones", html);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataAccionById(idAccion, Edit__) {
    var html = "";
    $.ajax({
        url: __lur[29],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlAccion' : '" + idAccion + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1) {
                    $("#divTxtAccion")[0].innerHTML = datos[0].DESC_ACCION
                    $("#btnS_Actividad").attr("data-ctrl-accion", datos[0].ID_CTRL_ACCION)
                    //$("#btnS_Actividad").attr("data-ctrl-actividad", 0);
                    $("#btnCancel_Actividad").attr("data-ctrl-accion", datos[0].ID_CTRL_ACCION)

                    if (Edit__ === 0) {
                        $("#txtDescAccion").val("");
                    } else if (Edit__ === 1) {
                        $("#txtDescAccion").val(datos[0].DESC_ACCION);
                    }
                    // if (datos[0].SN_TERMINADO === 1) {
                    //     $("#btnS_Actividad").attr("disabled", true);
                    // } else if (datos[0].SN_TERMINADO === 0) {
                    //     $("#btnS_Actividad").removeAttr("disabled");
                    // }
                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos del factor.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataActividad(idAccion, numControlActividad) {
    getDataAccionById(idAccion, 0);
    var html = "";
    $.ajax({
        url: __lur[30],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlAccion' : '" + idAccion + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1 && datos[0].ID_CTRL_CONTROL === null) {
                    recargarTabla("tableActividades", null);
                    $("#txtNoActividad").val(`${numControlActividad}.${datos.length + 1}`);
                } else {
                    datos.forEach(function (item) {
                        var envio__ = item.SN_ENVIADO === true || item.SN_VALIDA === true ? 'disabled' : '';

                        html += `<tr>
                                    <td class='text-1000'>${item.NO_ACTIVIDAD}</td>
                                    <td class='text-1000'>${item.DESC_TRIMESTRE}</td>
                                    <td class='text-1000'>${item.DESC_MES}</td>
                                    <td class='text-1000'>${item.NOMBRE_RESPONSABLE}</td>
                                    <td class='text-1000'>${item.DESC_ACTIVIDAD}</td>
                                    <td class='text-end'>
                                        <div>
                                            <!--<button class='btn btn-sm btn-falcon-info customButton btnSeeDatosActividad' type='button' data-ctrl-actividad='${item.ID_CTRL_ACTIVIDAD}' data-ctrl-no-actividad='${item.NO_ACTIVIDAD}'>Ver actividades</button>-->
                                            <button class='btn btn-sm btn-falcon-warning customButton btnEditDatosActividad ${envio__}' type='button' data-ctrl-actividad='${item.ID_CTRL_ACTIVIDAD}' data-ctrl-accion='${item.ID_CTRL_ACCION}' data-ctrl-no-actividad='${item.NO_ACTIVIDAD}'>Editar actividad</button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    recargarTabla("tableActividades", html);
                    $("#txtNoActividad").val(`${numControlActividad}.${datos.length + 1}`);
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataActividadById(idActividad, Edit__) {
    var html = "";
    $.ajax({
        url: __lur[34],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlActividad' : '" + idActividad + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1) {
                    if (Edit__ === 0) {
                        $("#txtDescActividad").val("");
                        $("#cboResponsable").val(0);
                        $("#cboMes").val(0);
                        $("#cboTrimestre").val(0);
                    } else if (Edit__ === 1) {
                        $("#txtDescActividad").val(datos[0].DESC_ACTIVIDAD);
                        $("#cboResponsable").val(datos[0].ID_RESPONSABLE);
                        $("#cboMes").val(datos[0].ID_MES);
                        $("#cboTrimestre").val(datos[0].ID_TRIMESTRE);
                        $("#txtNoActividad").val(datos[0].NO_ACTIVIDAD);
                    }
                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos del factor.", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataRiesgoById(idRiesgo) {
    var html = "";
    $.ajax({
        url: __lur[48],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlRiesgo' : '" + idRiesgo + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length === 1) {
                    if (datos[0].ID_CUADRANTE === null && datos[0].ID_IMPACTO === null && datos[0].ID_PROBABILIDAD == null) {
                        $("#btnS_Factor").removeAttr("disabled");
                        $("#btnE_ValorInicial").removeAttr("disabled");
                    } else {
                        $("#btnS_Factor").attr("disabled", true);
                        $("#btnE_ValorInicial").attr("disabled", true);
                    }
                } else {
                    new Noty(setMessage("Inserte factores", 'info', 'topCenter', timingNoty)).show();
                }
            } else {
                new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getMatriz(cveOS, cveUP) {
    if (cveOS === 0 && cveUP === 0 || cveOS === '0' && cveUP === '0' || cveOS === "null" && cveUP === "null" || cveOS === null && cveUP === null) {
        new Noty(setMessage('Espere a obtener más datos...', 'alert', 'bottomRight', timingNoty)).show();
        return;
    } else {
        $.ajax({
            url: __lur[44],
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
            success: function (result) {
                var splitResult = result.d.split("|");
                if (splitResult[0] === "ok") {
                    new Noty(setMessage("Mostrando reporte", 'success', 'bottomRight', timingNoty)).show();
                    window.open('../../Reportes/WebFrmRpt.aspx', 'REPORTE', 'width=650,height=600,scrollbars=yes,toolbar=no,left=10,top=10,resizable=yes');
                } else {
                    new Noty(setMessage(splitResult[0], 'error', 'bottomRight', timingNoty)).show();
                }
            },
            error: function (error) {
                new Noty(setMessage(error.responseJSON.Message, 'alert', 'bottomRight', timingNoty)).show();
            }
        });
    }
}

function getPtar(cveOS, cveUP) {
    if (cveOS === 0 && cveUP === 0 || cveOS === '0' && cveUP === '0' || cveOS === "null" && cveUP === "null" || cveOS === null && cveUP === null) {
        new Noty(setMessage('Espere a obtener más datos...', 'alert', 'bottomRight', timingNoty)).show();
        return;
    } else {
        new Noty(setMessage('Creando documento', 'success', 'bottomRight', timingNoty)).show();
        $.ajax({
            url: __lur[45],
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
            success: function (result) {
                var splitResult = result.d.split("|");
                if (splitResult[0] === "ok") {
                    new Noty(setMessage("Mostrando reporte", 'success', 'bottomRight', timingNoty)).show();
                    window.open('../../Reportes/WebFrmRpt.aspx', 'REPORTE', 'width=650,height=600,scrollbars=yes,toolbar=no,left=10,top=10,resizable=yes');
                } else {
                    new Noty(setMessage(splitResult[0], 'error', 'bottomRight', timingNoty)).show();
                }
            },
            error: function (error) {
                new Noty(setMessage(error.responseJSON.Message, 'alert', 'bottomRight', timingNoty)).show();
            }
        });
    }
}

function getConcentrado(cveOS, cveUP) {
    if (cveOS === 0 && cveUP === 0 || cveOS === '0' && cveUP === '0' || cveOS === "null" && cveUP === "null" || cveOS === null && cveUP === null) {
        new Noty(setMessage('Espere a obtener más datos...', 'alert', 'bottomRight', timingNoty)).show();
        return;
    } else {
        new Noty(setMessage('Creando documento', 'success', 'bottomRight', timingNoty)).show();
        $.ajax({
            url: __lur[47],
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
            success: function (result) {
                var splitResult = result.d.split("|");
                if (splitResult[0] === "ok") {
                    new Noty(setMessage("Mostrando reporte", 'success', 'bottomRight', timingNoty)).show();
                    window.open('../../Reportes/WebFrmRpt.aspx', 'REPORTE', 'width=650,height=600,scrollbars=yes,toolbar=no,left=10,top=10,resizable=yes');
                } else {
                    new Noty(setMessage(splitResult[0], 'error', 'bottomRight', timingNoty)).show();
                }
            },
            error: function (error) {
                new Noty(setMessage(error.responseJSON.Message, 'alert', 'bottomRight', timingNoty)).show();
            }
        });
    }
}

function getRiesgosTable(cveOS, cveUP) {
    var html = "";
    var html2 = "";
    $.ajax({
        url: __lur[46],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "', '_TypePrint' : 'printPage', '_vt' : 'null' }",
        async: false,
        success: function (result) {
            var datos = result.d;
            if (datos.length === 0) {
                recargarTabla("tableResumenRiesgos", null);
                recargarTabla("tableResumenRiesgos2", null);
            } else {
                datos.forEach(function (item) {
                    var badge = '';
                    if (item.VALOR_CUADRANTE === 'I') {
                        badge = 'badge-subtle-danger';
                    } else if (item.VALOR_CUADRANTE === 'II') {
                        badge = 'badge-subtle-warning';
                    } else if (item.VALOR_CUADRANTE === 'III') {
                        badge = 'badge-subtle-success';
                    } else if (item.VALOR_CUADRANTE === 'IV') {
                        badge = 'badge-subtle-primary';
                    } else {
                        badge = 'badge-subtle-ligth';
                    }

                    html += `<tr class='align-middle'>
                                <td class='text-1000 nowrap'>${item.CONSECUTIVO}</td>
                                <td class='text-1000 nowrap'>${item.VALOR_IMPACTO}</td>
                                <td class='text-1000 nowrap'>${item.VALOR_PROBABILIDAD}</td>
                                <td><span class='badge badge rounded-pill d-block p-2 ${badge}'>${item.VALOR_CUADRANTE}</span></td>
                            </tr>`
                });
                recargarTabla("tableResumenRiesgos", html);

                datos.forEach(function (item) {
                    var badge2 = '';
                    if (item.VALOR_CUADRANTE1 === 'I') {
                        badge2 = 'badge-subtle-danger';
                    } else if (item.VALOR_CUADRANTE1 === 'II') {
                        badge2 = 'badge-subtle-warning';
                    } else if (item.VALOR_CUADRANTE1 === 'III') {
                        badge2 = 'badge-subtle-success';
                    } else if (item.VALOR_CUADRANTE1 === 'IV') {
                        badge2 = 'badge-subtle-primary';
                    } else {
                        badge2 = 'badge-subtle-ligth';
                    }

                    html2 += `<tr class='align-middle'>
                                <td class='text-1000 nowrap'>${item.CONSECUTIVO}</td>
                                <td class='text-1000 nowrap'>${item.VALOR_IMPACTO1}</td>
                                <td class='text-1000 nowrap'>${item.VALOR_PROBABILIDAD1}</td>
                                <td><span class='badge badge rounded-pill d-block p-2 ${badge2}'>${item.VALOR_CUADRANTE1}</span></td>
                            </tr>`
                });
                recargarTabla("tableResumenRiesgos2", html2);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getDataObservaciones(cveOS, cveUP) {
    var html = "";
    var descBoton = "";
    var disabled = "";
    $.ajax({
        url: __lur[54],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
        async: false,
        success: function (result) {
            var datos = result.d;
            console.log(datos);
            if (datos.length === 0) {
                recargarTabla("tableObservaciones", null);
                $("#divObservaciones").hide();
            } else {
                datos.forEach(function (item) {
                    if (item.SN_SOLVENTA === null && item.SN_ACTIVO === true) {
                        descBoton = "Solventar";
                        disabled = "";
                    } else if (item.SN_SOLVENTA === true) {
                        descBoton = "Solventado";
                        disabled = "disabled";
                    }

                    if ((item.SN_SOLVENTA === null && item.SN_ACTIVO === true)) {
                        html += `<tr class='align-middle'>
                                <td class='text-1000 nowrap'>${item.DESC_OBSERVACION}</td>
                                <td class='text-end'>
                                    <div>
                                        <button class='btn btn-sm btn-falcon-info customButton btnSolventarObser ${disabled}' type='button' data-ctrl-observacion='${item.ID_OBSERVACION}' data-ctrl-riesgo='${item.ID_CTRL_RIESGO}'>${descBoton}</button>
                                    </div>
                                </td>
                            </tr>`
                    }
                });
                console.log(html);
                if (html === '') {
                    $("#divObservaciones").hide();
                } else {
                    $("#divObservaciones").show();
                    recargarTabla("tableObservaciones", html);
                }
            }
        },
        error: function (error) {
            console.log(error);
            $("#divObservaciones").hide();
        }
    });
}

$(document).ready(function () {
    //console.log("Sistema...");
    accord01.hide();
    divAlineacion.hide();
    divRiesgo.hide();
    divFactorRiesgo.hide();
    divControlesFactor.hide();
    divAccionesControl.hide();
    divActividadesAccion.hide();
    divEvidenciaActividad.hide();

    divForFile.hide();
    inputFile.hide();
    divForLink.hide();
    inputLink.hide();

    if (idRolUser === '101') {
        //console.log("Usuario captura");
        obtenerSelectDatosEfiscal();
        obtenerSelectDatosOS(cveEfiscald);
        obtenerSelectDatosUP(cveEfiscald, cveOSd, '');
        $("#cboOs").attr("disabled", true);
        $("#cboUp").attr("disabled", true);
        $("#cboCuadrante").attr("disabled", true);
        $("#cboCuadranteFin").attr("disabled", true);
        $("#cboTrimestre").attr("disabled", true);

        obtenerSelectDatosProceso(0, cveOSd, cveUPd);
        obtenerSelectDatosNivelRiesgo(0);
        obtenerSelectDatosClasRiesgo(0);
        obtenerSelectDatosImpacto(0);
        obtenerSelectDatosProbabilidad(0);
        obtenerSelectDatosCuadrante(0);
        obtenerSelectDatosImpactoFin(0);
        obtenerSelectDatosProbabilidadFin(0);
        obtenerSelectDatosCuadranteFin(0);
        obtenerSelectDatosEstrategia(0);
        obtenerSelectDatosControl(0);

        obtenerSelectDatosAlineacion();
        obtenerSelectDatosClasFactor(0);
        obtenerSelectDatosControlFactor(0);
        obtenerSelectDatosTipoFactor(0);
        obtenerSelectDatosTipoControl(0);
        obtenerSelectDatosDeterminacion(0);
        obtenerSelectDatosControlControl1(0);
        obtenerSelectDatosControlControl2(0);
        obtenerSelectDatosControlControl3(0);
        obtenerSelectDatosControlControl4(0);

        obtenerSelectDatosMeses(0);
        obtenerSelectDatosResponsable(0, cveOSd, cveUPd);
        obtenerSelectDatosTrimestre(0);
        //obtenerSelectDatosTipoReporte(0);
        //obtenerSelectDatosTipoDocumento(0);
        getChartData(cveOSd, cveUPd, 'printPage', 'null', 1);
        getDataSys(cveOSd, cveUPd);
        getRiesgosTable(cveOSd, cveUPd);
        getNotifications();
        setInterval(getNotifications, 10000);
        getDataObservaciones(cveOSd, cveUPd);
    } else if (idRolUser === '102' || idRolUser === '103') {
        console.log("Usuario administrador")
    }

    $(document).on("click", "#btnSearch", function () {
        getDataSys($("#cboOs").val(), $("#cboUp").val());
        getChartData($("#cboOs").val(), $("#cboUp").val(), 'printPage', 'null', 1);
        getRiesgosTable($("#cboOs").val(), $("#cboUp").val());
        getDataObservaciones($("#cboOs").val(), $("#cboUp").val());
        accord01.hide();
        divAlineacion.hide();
        divRiesgo.hide();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnCancel_Riesgo", function () {
        clearForms(2);
        accord01.hide();
        divAlineacion.hide();
        divRiesgo.hide();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnCancel_Alineacion", function () {
        clearForms(1);
        accord01.hide();
        divAlineacion.hide();
        divRiesgo.hide();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnNewInsert", function () {
        clearForms(1);
        $("#btnS_Alineacion").attr("data-ctrl-alineacion", 0);
        $("#btnS_Alineacion").attr("data-set-data", 0);

        getDataAlineacionCount(cveOSd, cveUPd);

        accord01.show();
        divAlineacion.show();
        divRiesgo.hide();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnS_Alineacion", function () {
        accord01.show();
        $("#btnS_Alineacion").attr("disabled", true);
        var idInsert = $("#btnS_Alineacion")[0].dataset.setData;
        var idReturn = $("#btnS_Alineacion")[0].dataset.ctrlAlineacion;

        if (validarFormularioAlineacion() === true) {
            var os = $("#cboOs").val();
            var up = $("#cboUp").val();
            var efiscal = $("#cboEfiscal").val();
            if (idInsert === "0" && idReturn === "0") {
                var idAlineacion = $("#cboAlineacion").val();
                var txtDesc01 = $("#txtAlineacion").val();
                var txtNoFolioData = $("#txtNoFolio").val();

                //console.log(idAlineacion, txtDesc01, 0, os, up, efiscal);
                setDataAlineacion(idAlineacion, txtDesc01, 0, os, up, efiscal, txtNoFolioData);

                getDataSys(os, up);

                $("#cboAlineacion").val(0);
                $("#txtAlineacion").val("");
                $("#txtNoFolio").val("");
            } else if (idInsert === "1" && idReturn !== "0") {
                var idAlineacion = $("#cboAlineacion").val();
                var txtDesc01 = $("#txtAlineacion").val();

                //console.log(idAlineacion, txtDesc01, idReturn, os, up, efiscal);
                setDataAlineacion(idAlineacion, txtDesc01, idReturn, os, up, efiscal, txtNoFolioData);

                getDataSys(os, up);

                $("#cboAlineacion").val(0);
                $("#txtAlineacion").val("");
                $("#txtNoFolio").val("");
            }
            accord01.show();
            divRiesgo.show();
            divAlineacion.hide();
            divFactorRiesgo.hide();
            divControlesFactor.hide();
            divAccionesControl.hide();
            divActividadesAccion.hide();
            divEvidenciaActividad.hide();
            $("#btnS_Alineacion").removeAttr("disabled");
        } else {
            accord01.hide();
            divRiesgo.hide();
            $("#btnS_Alineacion").removeAttr("disabled");
        }
    });

    $(document).on("click", ".btnSeeDatosAlineacion", function () {
        clearForms(2);

        var idReturn = $(this)[0].dataset.ctrlAlineacion;
        var tipoFin = $(this)[0].dataset.ctrlAlineacion2;

        //console.log(idReturn, tipoFin);
        $("#btnS_Riesgo").attr("data-res", `${idReturn}`)
        $("#btnS_Riesgo").attr("data-fin", `${tipoFin}`)
        $("#btnS_Riesgo").attr("data-ctrl-riesgo", 0);

        getDataAlineacion(idReturn, 0);

        accord01.show();
        divAlineacion.hide();
        divRiesgo.show();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", ".btnEditDatosAlineacion", function () {
        var idReturn = $(this)[0].dataset.ctrlAlineacion;
        var tipoFin = $(this)[0].dataset.ctrlAlineacion2;

        console.log(idReturn, tipoFin);

        getDataAlineacionById(idReturn);

        //$("#btnS_Alineacion").attr("data-ctrl-alineacion", `${idReturn}`);
        $("#btnS_Alineacion").attr("data-set-data", 1);

        accord01.show();
        divAlineacion.show();
        divRiesgo.hide();
        divFactorRiesgo.hide();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnS_Riesgo", function () {
        $("#btnS_Riesgo").attr("disabled", true);
        var idReturn = $("#btnS_Riesgo")[0].dataset.res;
        var tipoFin = $("#btnS_Riesgo")[0].dataset.fin;
        var idCtrlRiesgo = $("#btnS_Riesgo")[0].dataset.ctrlRiesgo;

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra de la alineación y proceso", 'error', 'topCenter', timingNoty)).show();
            return;
        }

        if (validarFormularioRiesgo() === true) {
            if (idCtrlRiesgo === "0") {
                const cboProcesoData = $("#cboProceso").val();
                const cboNivelRiesgoData = $("#cboNivelRiesgo").val();
                const cboClasRiesgoData = $("#cboClasRiesgo").val();
                //const txtPosibleRiesgoData = $("#txtPosibleRiesgo").val().trim();
                //const cboImpactoData = $("#cboImpactoInicio").val();
                //const cboProbabilidadData = $("#cboProbabilidadInicio").val();
                //const cboCuadranteData = $("#cboCuadranteInicio").val();
                //const cboControlData = $("#cboControl").val();
                //const cboImpactoFinData = $("#cboImpactoFin").val();
                //const cboProbabilidadFinData = $("#cboProbabilidadFin").val();
                //const cboCuadranteFinData = $("#cboCuadranteFin").val();
                //const cboEstrategiaData = $("#cboEstrategia").val();
                const cboEfiscalData = $("#cboEfiscal").val();
                const txtOSProcesoData = $("#txtOSProceso").val().trim();
                const txtUPProcesoData = $("#txtUPProceso").val().trim();
                const txtRiesgoData = $("#txtRiesgo").val().trim();

                //const dataLocal = "{ '_idProceso' : '" + cboProcesoData + "', '_idCtrlAlineacion' : '" + idReturn + "', '_idNivelRiesgo' : '" + cboNivelRiesgoData + "', '_idClasRiesgo' : '" + cboClasRiesgoData + "', '_txtPosibleRiesgo' : '" + txtPosibleRiesgoData + "', '_idImpacto' : '" + cboImpactoData + "', '_idProbabilidad' : '" + cboProbabilidadData + "', '_idCuadrante' : '" + cboCuadranteData + "', '_idControl' : '" + cboControlData + "', '_idImpactoFin' : '" + cboImpactoFinData + "', '_idProbabilidadFin' : '" + cboProbabilidadFinData + "', '_idCuadranteFin' : '" + cboCuadranteFinData + "', '_idEstrategia' : '" + cboEstrategiaData + "', '_Efiscal' : '" + cboEfiscalData + "', '_OS' : '" + txtOSProcesoData + "', '_UP' : '" + txtUPProcesoData + "', '_txtRiesgo' : '" + txtRiesgoData + "', '_idUsuario' : '" + idUser + "', '_idCtrlRiesgo' : '" + idCtrlRiesgo + "' }";
                const dataLocal = "{ '_idProceso' : '" + cboProcesoData + "', '_idCtrlAlineacion' : '" + idReturn + "', '_idNivelRiesgo' : '" + cboNivelRiesgoData + "', '_idClasRiesgo' : '" + cboClasRiesgoData + "', '_Efiscal' : '" + cboEfiscalData + "', '_OS' : '" + txtOSProcesoData + "', '_UP' : '" + txtUPProcesoData + "', '_txtRiesgo' : '" + txtRiesgoData + "', '_idUsuario' : '" + idUser + "', '_idCtrlRiesgo' : '" + idCtrlRiesgo + "' }";
                //console.log(dataLocal);
                setDataRiesgo(dataLocal);

                getDataAlineacion(idReturn, 0);
            } else if (idCtrlRiesgo !== "0") {
                const cboProcesoData = $("#cboProceso").val();
                const cboNivelRiesgoData = $("#cboNivelRiesgo").val();
                const cboClasRiesgoData = $("#cboClasRiesgo").val();
                //const txtPosibleRiesgoData = $("#txtPosibleRiesgo").val().trim();
                //const cboImpactoData = $("#cboImpactoInicio").val();
                //const cboProbabilidadData = $("#cboProbabilidadInicio").val();
                //const cboCuadranteData = $("#cboCuadranteInicio").val();
                //const cboControlData = $("#cboControl").val();
                //const cboImpactoFinData = $("#cboImpactoFin").val();
                //const cboProbabilidadFinData = $("#cboProbabilidadFin").val();
                //const cboCuadranteFinData = $("#cboCuadranteFin").val();
                //const cboEstrategiaData = $("#cboEstrategia").val();
                const cboEfiscalData = $("#cboEfiscal").val();
                const txtOSProcesoData = $("#txtOSProceso").val().trim();
                const txtUPProcesoData = $("#txtUPProceso").val().trim();
                const txtRiesgoData = $("#txtRiesgo").val().trim();

                const dataLocal = "{ '_idProceso' : '" + cboProcesoData + "', '_idCtrlAlineacion' : '" + idReturn + "', '_idNivelRiesgo' : '" + cboNivelRiesgoData + "', '_idClasRiesgo' : '" + cboClasRiesgoData + "', '_Efiscal' : '" + cboEfiscalData + "', '_OS' : '" + txtOSProcesoData + "', '_UP' : '" + txtUPProcesoData + "', '_txtRiesgo' : '" + txtRiesgoData + "', '_idUsuario' : '" + idUser + "', '_idCtrlRiesgo' : '" + idCtrlRiesgo + "' }";
                //console.log(dataLocal);
                setDataRiesgo(dataLocal);

                getDataAlineacion(idReturn, 0);
            }
        } else {
            $("#btnS_Riesgo").removeAttr("disabled");
        }
    });

    $(document).on("click", "#btnE_Riesgo", function () {
        var idReturn = $("#btnE_Riesgo")[0].dataset.ctrlAlineacion;
        getDataAlineacion(idReturn, 1);
    });

    $(document).on("click", "#btnN_Factor", function () {
        clearForms(3);

        var idReturn = $(this)[0].dataset.ctrlRiesgo;

        $("#btnS_Factor").attr("data-ctrl-riesgo", idReturn);
        $("#btnE_ValorInicial").attr("data-ctrl-riesgo", idReturn);
        $("#btnCancel_Factor").attr("data-ctrl-riesgo", idReturn);
        $("#btnS_Factor").attr("data-ctrl-factor", 0);

        getDataFactor(idReturn);
        getDataRiesgoById(idReturn);

        accord01.show();
        divAlineacion.hide();
        divRiesgo.show();
        divFactorRiesgo.show();
        divControlesFactor.hide();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", "#btnS_Factor", function () {
        $("#btnS_Factor").attr("disabled", true);
        var idReturn = $("#btnS_Factor")[0].dataset.ctrlRiesgo;
        var idCtrlFactor = $("#btnS_Factor")[0].dataset.ctrlFactor;

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra del riesgo", 'error', 'topCenter', timingNoty)).show();
            return;
        }

        if (validarFormularioFactor() === true) {
            if (idCtrlFactor === "0") {
                const cboClasFactorData = $("#cboClasFactor").val();
                const cboControlFactorData = $("#cboControlFactor").val();
                const cboTipoFactorData = $("#cboTipoFactor").val();
                const txtFolioFactorData = $("#txtFolioFactor").val().trim();
                const txtFactorRiesgoData = $("#txtFactorRiesgo").val().trim();

                const dataLocal = "{ '_idCtrlRiesgo' : '" + idReturn + "', '_idClasFactor' : '" + cboClasFactorData + "', '_idControlFactor' : '" + cboControlFactorData + "', '_idTipoFactor' : '" + cboTipoFactorData + "', '_txtNoFactor' : '" + txtFolioFactorData + "', '_txtDescFactor' : '" + txtFactorRiesgoData + "', '_idUsuario' : '" + idUser + "', '_idCtrlFactor' : '" + idCtrlFactor + "' }";

                setDataFactor(dataLocal);
                $("#btnS_Factor").removeAttr("disabled");
                getDataFactor(idReturn);
            } else if (idCtrlFactor !== "0") {
                const cboClasFactorData = $("#cboClasFactor").val();
                const cboControlFactorData = $("#cboControlFactor").val();
                const cboTipoFactorData = $("#cboTipoFactor").val();
                const txtFolioFactorData = $("#txtFolioFactor").val().trim();
                const txtFactorRiesgoData = $("#txtFactorRiesgo").val().trim();

                const dataLocal = "{ '_idCtrlRiesgo' : '" + idReturn + "', '_idClasFactor' : '" + cboClasFactorData + "', '_idControlFactor' : '" + cboControlFactorData + "', '_idTipoFactor' : '" + cboTipoFactorData + "', '_txtNoFactor' : '" + txtFolioFactorData + "', '_txtDescFactor' : '" + txtFactorRiesgoData + "', '_idUsuario' : '" + idUser + "', '_idCtrlFactor' : '" + idCtrlFactor + "' }";

                setDataFactor(dataLocal);
                $("#btnS_Factor").removeAttr("disabled");
                getDataFactor(idReturn);
            }
        } else {
            //console.log(idReturn, tipoFin);
            $("#btnS_Factor").removeAttr("disabled");
        }
    });

    $(document).on("click", ".btnSeeDatosFactor", function () {
        clearForms(4);

        var idReturn = $(this)[0].dataset.ctrlFactor;
        var idCtrlRiesgo = $(this)[0].dataset.ctrlRiesgo;
        var numFolio = $(this)[0].dataset.ctrl1;

        $("#btnE_ValorFinal").attr("data-ctrl-riesgo", idCtrlRiesgo);
        $("#btnE_ValorFinal").attr("data-ctrl-factor", idReturn);

        getDataFactor(idCtrlRiesgo);
        getDataControl(idReturn, numFolio);

        accord01.show();
        divAlineacion.hide();
        divRiesgo.show();
        divFactorRiesgo.show();
        divControlesFactor.show();
        divAccionesControl.hide();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", ".btnEditDatosFactor", function () {
        var idReturn = $(this)[0].dataset.ctrlFactor;
        var idCtrlRiesgo = $(this)[0].dataset.ctrlRiesgo;
        var numFolio = $(this)[0].dataset.ctrl1;

        $("#btnS_Factor").attr("data-ctrl-factor", idReturn);

        getDataFactor(idCtrlRiesgo);
        getDataFactorById(idReturn, 1);
    });

    $(document).on("click", "#btnCancel_Factor", function () {
        var idReturn = $(this)[0].dataset.ctrlRiesgo;
        $("#btnS_Factor").attr("data-ctrl-factor", 0);

        clearForms(3);

        getDataFactor(idReturn);
    });

    $(document).on("click", "#btnS_Control", function () {
        $("#btnS_Control").attr("disabled", true);
        var idReturn = $("#btnS_Control")[0].dataset.ctrl1;
        var idCtrlControl = $("#btnS_Control")[0].dataset.ctrlControl;

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra del factor", 'error', 'topCenter', timingNoty)).show();
            return;
        }

        if (validarFormularioControl() === true) {
            if (idCtrlControl === "0") {
                const cboTipoControlData = $("#cboTipoControl").val();
                const cboDeterminacionData = $("#cboDeterminacion").val();
                const cboControlDocumentadoData = $("#cboControlDocumentado").val();
                const cboControlFormalizadoData = $("#cboControlFormalizado").val();
                const cboControlAplicaData = $("#cboControlAplica").val();
                const cboControlEfectivoData = $("#cboControlEfectivo").val();
                const txtFolioControlFactorData = $("#txtFolioControlFactor").val().trim();
                const txtDescControlFactorData = $("#txtDescControlFactor").val().trim();

                const dataLocal = "{ '_idCtrlFactor' : '" + idReturn + "', '_idTipoControl' : '" + cboTipoControlData + "', '_idDeterminacion' : '" + cboDeterminacionData + "', '_estaDocumen' : '" + cboControlDocumentadoData + "', '_estaForma' : '" + cboControlFormalizadoData + "', '_seAplica' : '" + cboControlAplicaData + "', '_esEfectivo' : '" + cboControlEfectivoData + "', '_folioControl' : '" + txtFolioControlFactorData + "', '_descControl' : '" + txtDescControlFactorData + "', '_idUsuario' : '" + idUser + "', '_idCtrlControl' : '" + idCtrlControl + "'  }";
                console.log(dataLocal);
                setDataControl(dataLocal);
                $("#btnS_Control").removeAttr("disabled");
                getDataControl(idReturn, txtFolioControlFactorData.substring(0, 6));
            } else if (idCtrlControl !== "0") {
                const cboTipoControlData = $("#cboTipoControl").val();
                const cboDeterminacionData = $("#cboDeterminacion").val();
                const cboControlDocumentadoData = $("#cboControlDocumentado").val();
                const cboControlFormalizadoData = $("#cboControlFormalizado").val();
                const cboControlAplicaData = $("#cboControlAplica").val();
                const cboControlEfectivoData = $("#cboControlEfectivo").val();
                const txtFolioControlFactorData = $("#txtFolioControlFactor").val().trim();
                const txtDescControlFactorData = $("#txtDescControlFactor").val().trim();

                const dataLocal = "{ '_idCtrlFactor' : '" + idReturn + "', '_idTipoControl' : '" + cboTipoControlData + "', '_idDeterminacion' : '" + cboDeterminacionData + "', '_estaDocumen' : '" + cboControlDocumentadoData + "', '_estaForma' : '" + cboControlFormalizadoData + "', '_seAplica' : '" + cboControlAplicaData + "', '_esEfectivo' : '" + cboControlEfectivoData + "', '_folioControl' : '" + txtFolioControlFactorData + "', '_descControl' : '" + txtDescControlFactorData + "', '_idUsuario' : '" + idUser + "', '_idCtrlControl' : '" + idCtrlControl + "'  }";
                console.log(dataLocal);
                setDataControl(dataLocal);
                $("#btnS_Control").removeAttr("disabled");
                getDataControl(idReturn, txtFolioControlFactorData.substring(0, 6));
            }
        } else {
            //console.log(idReturn, tipoFin);
            $("#btnS_Control").removeAttr("disabled");
        }
        $("#btnS_Control").attr("data-ctrl-control", 0);
    });

    $(document).on("click", ".btnSeeDatosControl", function () {
        clearForms(4);
        clearForms(5);

        var idReturn = $(this)[0].dataset.ctrlControl;
        var idCtrlFactor = $(this)[0].dataset.ctrlFactor;
        var numFolio = $(this)[0].dataset.ctrl1;

        getDataAccion(idReturn);
        getDataControl(idCtrlFactor, numFolio.substring(0, 6));

        accord01.show();
        divAlineacion.hide();
        divRiesgo.show();
        divFactorRiesgo.show();
        divControlesFactor.show();
        divAccionesControl.show();
        divActividadesAccion.hide();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", ".btnEditDatosControl", function () {
        var idReturn = $(this)[0].dataset.ctrlControl;
        var idCtrlFactor = $(this)[0].dataset.ctrlFactor;
        var numFolio = $(this)[0].dataset.ctrl1;

        $("#btnS_Control").attr("data-ctrl-control", idReturn);

        getDataControl(idCtrlFactor, numFolio.substring(0, 6));
        getDataControlById(idReturn, 1);
    });

    $(document).on("click", "#btnCancel_Control", function () {
        $("#btnS_Control").attr("data-ctrl-control", 0);
        const txtFolioControlFactorData = $("#txtFolioControlFactor").val().trim();
        var idReturn = $("#btnCancel_Control")[0].dataset.ctrl1;

        clearForms(4);

        getDataControl(idReturn, txtFolioControlFactorData.substring(0, 6));
    });

    $(document).on("click", "#btnS_Accion", function () {
        $("#btnS_Accion").attr("disabled", true);
        var idReturn = $("#btnS_Accion")[0].dataset.ctrlControl;
        var idCtrlAccion = $("#btnS_Accion")[0].dataset.ctrlAccion;

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra del factor", 'error', 'topCenter', timingNoty)).show();
            return;
        }

        if (validarFormularioAccion() === true) {
            if (idCtrlAccion === "0") {
                const txtDescAccionData = $("#txtDescAccion").val().trim();

                const dataLocal = "{ '_idCtrlControl' : '" + idReturn + "', '_descAccion' : '" + txtDescAccionData + "', '_idUsuario' : '" + idUser + "', '_idCtrlAccion' : '" + idCtrlAccion + "'  }";
                console.log(dataLocal);
                setDataAccion(dataLocal);
                $("#btnS_Accion").removeAttr("disabled");
                getDataAccion(idReturn);
            } else if (idCtrlAccion !== "0") {
                const txtDescAccionData = $("#txtDescAccion").val().trim();

                const dataLocal = "{ '_idCtrlControl' : '" + idReturn + "', '_descAccion' : '" + txtDescAccionData + "', '_idUsuario' : '" + idUser + "', '_idCtrlAccion' : '" + idCtrlAccion + "'  }";
                console.log(dataLocal);
                setDataAccion(dataLocal);
                $("#btnS_Accion").removeAttr("disabled");
                getDataAccion(idReturn);
            }

        } else {
            //console.log(idReturn, tipoFin);
            $("#btnS_Accion").removeAttr("disabled");
        }
    });

    $(document).on("click", ".btnSeeDatosAccion", function () {
        clearForms(5);
        clearForms(6);

        var idReturn = $(this)[0].dataset.ctrlAccion;
        var numeroControlAccion = $(this)[0].dataset.ctrlNoControl;

        getDataActividad(idReturn, numeroControlAccion);

        $("#btnS_Actividad").attr("data-ctrl-actividad", 0);

        accord01.show();
        divAlineacion.hide();
        divRiesgo.show();
        divFactorRiesgo.show();
        divControlesFactor.show();
        divAccionesControl.show();
        divActividadesAccion.show();
        divEvidenciaActividad.hide();
    });

    $(document).on("click", ".btnEditDatosAccion", function () {
        //$(".btnSeeDatosAlineacion").attr("disabled", true);
        var idCtrlAccion = $(this)[0].dataset.ctrlAccion;
        var idCtrlControl = $(this)[0].dataset.ctrlControl;
        var numeroControlAccion = $(this)[0].dataset.ctrlNoControl;
        $("#btnS_Accion").attr("data-ctrl-accion", idCtrlAccion);

        getDataAccion(idCtrlControl);
        getDataAccionById(idCtrlAccion, 1);

        $("#btnS_Accion").removeAttr("disabled");
    });

    $(document).on("click", "#btnCancel_Accion", function () {
        var idReturn = $("#btnCancel_Accion")[0].dataset.ctrlControl;
        $("#btnS_Accion").attr("data-ctrl-accion", 0);

        clearForms(5);

        getDataAccion(idReturn);
    });

    $(document).on("click", "#btnS_Actividad", function () {
        $("#btnS_Actividad").attr("disabled", true);
        var idReturn = $("#btnS_Actividad")[0].dataset.ctrlAccion;
        var idCtrlActividad = $("#btnS_Actividad")[0].dataset.ctrlActividad;

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra de la acción", 'error', 'topCenter', timingNoty)).show();
            return;
        }

        if (validarFormularioActividad() === true) {
            if (idCtrlActividad === "0") {
                //const txtResponsableActividadData = $("#txtResponsableActividad").val().trim();
                const cboResponsableData = $("#cboResponsable").val();
                const cboMesData = $("#cboMes").val();
                const txtDescActividadData = $("#txtDescActividad").val().trim();
                const cboTrimestreData = $("#cboTrimestre").val();
                const txtNoActividadData = $("#txtNoActividad").val().trim();
                //const cboTipoReporteData = $("#cboTipoReporte").val();

                // const dataLocal = "{ '_idCtrlAccion' : '" + idReturn + "', '_descResponsable' : '" + txtResponsableActividadData + "', '_descActividad' : '" + txtDescActividadData + "', '_idTrimestre' : '" + cboTrimestreData + "', '_idTipoReporte' : '" + cboTipoReporteData + "', '_idUsuario' : '" + idUser + "'  }";
                const dataLocal = "{ '_idCtrlAccion' : '" + idReturn + "', '_idResponsable' : '" + cboResponsableData + "', '_descActividad' : '" + txtDescActividadData + "', '_idUsuario' : '" + idUser + "', '_idTrimestre' : '" + cboTrimestreData + "', '_idMes' : '" + cboMesData + "', '_idCtrlActividad' : '" + idCtrlActividad + "', '_noActividad' : '" + txtNoActividadData + "' }";
                console.log(dataLocal);
                setDataActividad(dataLocal);
                $("#btnS_Actividad").removeAttr("disabled");
                getDataActividad(idReturn, txtNoActividadData.substring(0, 8));
            } else if (idCtrlActividad !== "0") {
                //const txtResponsableActividadData = $("#txtResponsableActividad").val().trim();
                const cboResponsableData = $("#cboResponsable").val();
                const cboMesData = $("#cboMes").val();
                const txtDescActividadData = $("#txtDescActividad").val().trim();
                const cboTrimestreData = $("#cboTrimestre").val();
                const txtNoActividadData = $("#txtNoActividad").val().trim();
                //const cboTipoReporteData = $("#cboTipoReporte").val();

                // const dataLocal = "{ '_idCtrlAccion' : '" + idReturn + "', '_descResponsable' : '" + txtResponsableActividadData + "', '_descActividad' : '" + txtDescActividadData + "', '_idTrimestre' : '" + cboTrimestreData + "', '_idTipoReporte' : '" + cboTipoReporteData + "', '_idUsuario' : '" + idUser + "'  }";
                const dataLocal = "{ '_idCtrlAccion' : '" + idReturn + "', '_idResponsable' : '" + cboResponsableData + "', '_descActividad' : '" + txtDescActividadData + "', '_idUsuario' : '" + idUser + "', '_idTrimestre' : '" + cboTrimestreData + "', '_idMes' : '" + cboMesData + "', '_idCtrlActividad' : '" + idCtrlActividad + "', '_noActividad' : '" + txtNoActividadData + "' }";
                console.log(dataLocal);
                setDataActividad(dataLocal);
                $("#btnS_Actividad").removeAttr("disabled");
                getDataActividad(idReturn, txtNoActividadData.substring(0, 8));
            }
        } else {
            $("#btnS_Actividad").removeAttr("disabled");
        }
        clearForms(6);
    });

    $(document).on("click", ".btnEditDatosActividad", function () {
        //$(".btnSeeDatosAlineacion").attr("disabled", true);
        var idCtrlActividad = $(this)[0].dataset.ctrlActividad;
        var idCtrlAccion = $(this)[0].dataset.ctrlAccion;
        var ctrlNoActividad = $(this)[0].dataset.ctrlNoActividad;

        $("#btnS_Actividad").attr("data-ctrl-actividad", idCtrlActividad);
        $("#btnCancel_Actividad").attr("data-ctrl-no-actividad", ctrlNoActividad);

        getDataActividad(idCtrlAccion, ctrlNoActividad.substring(8));
        getDataActividadById(idCtrlActividad, 1);
    });

    $(document).on("click", "#btnCancel_Actividad", function () {
        var idReturn = $("#btnCancel_Actividad")[0].dataset.ctrlAccion;
        var ctrlNoActividad = $("#btnCancel_Actividad")[0].dataset.ctrlNoActividad;

        $("#btnS_Actividad").attr("data-ctrl-actividad", 0);

        clearForms(6);

        getDataActividad(idReturn, ctrlNoActividad.substring(0, 8));
    });

    $(document).on("click", "#btnE_ValorInicial", function () {
        event.preventDefault(); // importante mantenerlo para detener navegación u otras acciones

        alertConfirmMessage('¿Está seguro de insertar los valores iniciales? Si lo hace ya no podrá editar o ingresar registros.').then((confirmed) => {
            if (confirmed) {
                var idReturn = $("#btnE_ValorInicial")[0].dataset.ctrlRiesgo;

                $.ajax({
                    url: __lur[56],
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: "{ '_idCtrlRiesgo' : '" + idReturn + "' }",
                    async: true,
                    success: function (result) {
                        const datos = result.d;
                        console.log(datos);
                        if (datos !== 'error') {
                            const algunoFallaFactor = datos.some(item => item.NUM_FACTORES === 0);

                            if (algunoFallaFactor) {
                                new Noty(setMessage(`Al menos debe de existir un factor para insertar los valores iniciales del riessgo..`, 'info', 'topCenter', 10000)).show();
                                return;
                            } else {
                                dialog();
                                $("#btnUpdateValoresRiesgoInicio").attr("data-ctrl-riesgo", idReturn);
                            }
                        } else {
                            new Noty(setMessage("Ocurrió un error al obtener los datos.", 'error', 'topCenter', timingNoty)).show();
                            return;
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        });
    });

    $(document).on("click", "#btnUpdateValoresRiesgoInicio", function () {
        var idReturn = $("#btnUpdateValoresRiesgoInicio")[0].dataset.ctrlRiesgo;
        console.log(idReturn);
        if (idReturn !== 0) {
            if (validarFormularioValoresInicial() === true) {
                const txtPosibleRiesgoData = $("#txtPosibleRiesgo").val().trim();
                const cboImpactoData = $("#cboImpactoInicio").val();
                const cboProbabilidadData = $("#cboProbabilidadInicio").val();
                const cboCuadranteData = $("#cboCuadranteInicio").val();

                const dataLocal = "{ '_txtPosibleRiesgo' : '" + txtPosibleRiesgoData + "', '_idImpacto' : '" + cboImpactoData + "', '_idProbabilidad' : '" + cboProbabilidadData + "', '_idCuadrante' : '" + cboCuadranteData + "', '_idUsuario' : '" + idUser + "', '_idCtrlRiesgo' : '" + idReturn + "' }";
                updateRiesgo(dataLocal);
                $('#staticBackdrop1').modal('hide');
            } else {

            }
            getDataFactor(idReturn);
            getDataRiesgoById(idReturn);
        } else {
            new Noty(setMessage("Ocurrio un error al obtener información extra del riesgo", 'error', 'topCenter', timingNoty)).show();
            return;
        }
    });

    $(document).on("click", "#btnE_ValorFinal", function () {
        alertConfirmMessage('¿Está seguro de insertar los valores finales? Si lo hace ya no podrá editar o ingresar registros.').then((confirmed) => {
            if (confirmed) {
                var idReturn = $("#btnE_ValorFinal")[0].dataset.ctrlRiesgo;
                var idReturn2 = $("#btnE_ValorFinal")[0].dataset.ctrlFactor;

                $("#btnUpdateValoresRiesgoFin").attr("data-ctrl-riesgo", idReturn);
                $("#btnUpdateValoresRiesgoFin").attr("data-ctrl-factor", idReturn2);

                $.ajax({
                    url: __lur[50],
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: "{ '_idCtrlRiesgo' : '" + idReturn + "' }",
                    async: false,
                    success: function (result) {
                        const datos = result.d;
                        console.log(datos);
                        if (datos !== 'error') {
                            const algunoFalla = datos.some(item => item.PASA_ === 0);

                            if (algunoFalla) {
                                const foliosFallidos = datos.filter(item => item.PASA_ === 0).map(item => item.FOLIO).join(', ');

                                new Noty(setMessage(`Los siguientes factores no cumplen: ${foliosFallidos}. Favor de insertar los controles para este factor`, 'warning', 'topCenter', 10000)).show();
                            } else {
                                const idImpacto = datos.filter(item => item.PASA_ === 1).map(item => item.ID_IMPACTO);
                                const idProbabilidad = datos.filter(item => item.PASA_ === 1).map(item => item.ID_PROBABILIDAD);
                                $("#impactoLocal").text(idImpacto);
                                $("#probabilidadLocal").text(idProbabilidad);
                                dialog2();
                            }
                        } else {
                            new Noty(setMessage("Ocurrió un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
                        }

                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        });
    });

    $(document).on("click", "#btnUpdateValoresRiesgoFin", function () {
        var idReturn = $("#btnUpdateValoresRiesgoFin")[0].dataset.ctrlRiesgo;
        var idReturn2 = $("#btnUpdateValoresRiesgoFin")[0].dataset.ctrlFactor;
        console.log(idReturn);
        if (idReturn !== 0) {
            if (validarFormularioValoresFinal() === true) {
                const cboControlData = $("#cboControl").val();
                const cboImpactoFinData = $("#cboImpactoFin").val();
                const cboProbabilidadFinData = $("#cboProbabilidadFin").val();
                const cboCuadranteFinData = $("#cboCuadranteFin").val();
                const cboEstrategiaData = $("#cboEstrategia").val();

                const txtFolioControlFactorData = $("#txtFolioControlFactor").val().trim();

                const dataLocal = "{ '_idControl' : '" + cboControlData + "', '_idImpactoFin' : '" + cboImpactoFinData + "', '_idProbabilidadFin' : '" + cboProbabilidadFinData + "', '_idCuadranteFin' : '" + cboCuadranteFinData + "', '_idEstrategia' : '" + cboEstrategiaData + "', '_idUsuario' : '" + idUser + "', '_idCtrlRiesgo' : '" + idReturn + "' }";
                console.log(dataLocal);
                updateRiesgo2(dataLocal);
                $('#staticBackdrop2').modal('hide');
                getDataFactor(idReturn);
                getDataControl(idReturn2, txtFolioControlFactorData.substring(0, 6));
            } else {

            }
        } else {
            new Noty(setMessage("Ocurrio un error al obtener información extra del riesgo", 'error', 'topCenter', timingNoty)).show();
            return;
        }
    });

    $(document).on("change", "#cboImpactoFin", function () {
        var selectedValue = $(this).val();
        if (selectedValue < $("#impactoLocal").text()) {
            new Noty(setMessage("No puede ingresar un valor de impacto menor al inicial", 'error', 'topCenter', timingNoty)).show();
            $(this).val(0);
        }
    });

    $(document).on("change", "#cboProbabilidadFin", function () {
        var selectedValue = $(this).val();
        if (selectedValue < $("#probabilidadLocal").text()) {
            new Noty(setMessage("No puede ingresar un valor de probabilidad menor al inicial", 'error', 'topCenter', timingNoty)).show();
            $(this).val(0);
        }
    });

    $(document).on("change", "#cboEfiscal", function () {
        var selectedValue = $(this).val();
        obtenerSelectDatosOS(selectedValue)
    });

    $(document).on("change", "#cboOs", function () {
        var selectedValue = $(this).val();
        obtenerSelectDatosUP(cveEfiscald, selectedValue, 'cambio')
    });

    $(document).on("change", "#cboProceso", function () {
        var selectedValue = $(this).val();
        if (selectedValue === 0 || selectedValue === "0") {
            $("#txtOSProceso").val("Seleccione el proceso");
            $("#txtUPProceso").val("Seleccione el proceso");
        } else {
            getDataProceso(selectedValue, $("#cboOs").val(), $("#cboUp").val());
        }
    });

    $(document).on("change", "#cboDocumento", function () {
        inputFile.val("");
        inputLink.val("");

        var selectedValue = $(this).val();
        console.log(selectedValue);

        $("#btnS_Evidencia").attr("data-ctrl-documento", `${selectedValue}`);
        if (selectedValue === "1" || selectedValue === "2") { //WORD O PDF
            divForFile.show();
            inputFile.show();
            divForLink.hide();
            inputLink.hide();
            if (selectedValue === "1") {
                inputFile.attr("accept", ".doc, .docx");
                inputFile.attr("onchange", "validateFileWord(this);");
            } else if (selectedValue === "2") {
                inputFile.attr("accept", ".pdf");
                inputFile.attr("onchange", "validateFilePdf(this);");
            }
        } else if (selectedValue === "3") { //LINK [ENLACE]
            divForFile.hide();
            inputFile.hide();
            divForLink.show();
            inputLink.show();

            inputLink.attr("onchange", "validateUrl(this);");
        } else {
            divForFile.hide();
            inputFile.hide();
            divForLink.hide();
            inputLink.hide();
        }
    });

    $(document).on("change", "#cboImpactoInicio, #cboProbabilidadInicio, #cboImpactoFin, #cboProbabilidadFin", function () {
        const grupo = $(this).data("grupo");
        setValores(grupo);
    });

    $(document).on("change", "#cboMes", function () {
        var selectedValue = $(this).val();
        if (selectedValue >= 1 && selectedValue <= 3) {
            $("#cboTrimestre").val(1);
        } else if (selectedValue >= 4 && selectedValue <= 6) {
            $("#cboTrimestre").val(2);
        } else if (selectedValue >= 7 && selectedValue <= 9) {
            $("#cboTrimestre").val(3);
        } else if (selectedValue >= 10 && selectedValue <= 12) {
            $("#cboTrimestre").val(4);
        } else {
            $("#cboTrimestre").val(0);
        }
    });

    $(document).on("click", "#btnGetMatriz", function () {
        getMatriz($("#cboOs").val(), $("#cboUp").val());
    });

    $(document).on("click", "#btnGetPtar", function () {
        var configVal = $("#btnGetPtar")[0].dataset.ctrlValidate;
        getPtar($("#cboOs").val(), $("#cboUp").val());
    });

    $(document).on("click", "#btnGetMapa", function () {
        getChartData($("#cboOs").val(), $("#cboUp").val(), 'printPage', 'null', 0);
    });

    $(document).on("click", "#btnGetConcentrado", function () {
        getConcentrado($("#cboOs").val(), $("#cboUp").val());
    });

    $(document).on("click", "#btnSendToValidate", function (event) {
        event.preventDefault(); // importante mantenerlo para detener navegación u otras acciones
        var cveOS = $("#cboOs").val();
        var cveUP = $("#cboUp").val();
        if (cveOS === 0 && cveUP === 0 || cveOS === '0' && cveUP === '0' || cveOS === "null" && cveUP === "null" || cveOS === null && cveUP === null) {
            new Noty(setMessage('Espere a obtener más datos...', 'alert', 'bottomRight', timingNoty)).show();
            return;
        }
        alertConfirmMessage('¿Está seguro de enviar su información a validación?').then((confirmed) => {
            if (confirmed) {
                $.ajax({
                    url: __lur[52],
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
                    async: true,
                    success: function (result) {
                        const datos = result.d;
                        console.log(datos);
                        if (datos !== 'error') {
                            const algunoFallaFactor = datos.some(item => item.NUM_FACTORES === 0);
                            const algunoFallaControl = datos.some(item => item.NUM_CONTROLES === 0);
                            const algunoFallaAccion = datos.some(item => item.NUM_ACCIONES === 0);
                            const algunoFallaActividad = datos.some(item => item.NUM_ACTIVIDADES === 0);
                            const algunaObservacion = datos.some(item => item.NUM_OBSERVACIONES !== 0);
                            const algunaNoValidada = datos.some(item => item.SN_VALIDA === null && item.SN_ENVIADO === true);

                            const idCtrlRiesgos = datos.filter(item => item.ID_CTRL_RIESGO !== 0 && (item.SN_VALIDA === false || item.SN_VALIDA === null)).map(item => item.ID_CTRL_RIESGO).join('|');

                            if (algunaNoValidada) {
                                new Noty(setMessage(`Antes de continuar con el envio, necesita esperar a que validen o rechazen los demas riesgos enviados.`, 'info', 'topCenter', 10000)).show();
                                return;
                            }

                            if (algunoFallaFactor || algunoFallaControl || algunoFallaAccion || algunoFallaActividad) {
                                new Noty(setMessage(`Esta intentando enviar información incompleta. Verifique de favor antes de enviar.`, 'info', 'topCenter', 10000)).show();
                                return;
                            } else {
                                if (algunaObservacion) {
                                    new Noty(setMessage("No puede continuar con el envio, hasta que solvente sus observaciones.", 'error', 'topCenter', timingNoty)).show();
                                    return;
                                } else {
                                    console.log("Enviando información a validación");
                                    updateRiesgo3("{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "', 'arrRiesgos' : '" + idCtrlRiesgos + "', '_idUser' : '" + idUser + "' }")
                                }
                            }
                        } else {
                            new Noty(setMessage("Ocurrió un error al obtener los datos.", 'error', 'topCenter', timingNoty)).show();
                            return;
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        });
    });

    $(document).on("click", ".btnSolventarObser", function (event) {
        var idReturn1 = $(this)[0].dataset.ctrlObservacion;
        var idReturn2 = $(this)[0].dataset.ctrlRiesgo;
        console.log(idReturn1, idReturn2);
        alertConfirmMessage('¿Está seguro de solventar su observación?').then((confirmed) => {
            if (confirmed) {
                if (idReturn1 !== 0) {
                    $.ajax({
                        url: __lur[55],
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{ '_idCtrlObservacion' : '" + idReturn1 + "', '_idCtrlRiesgo' : '" + idReturn2 + "' }",
                        async: true,
                        success: function (result) {
                            const datos = result.d;
                            console.log(datos);
                            if (datos === 'ok') {
                                getDataObservaciones($("#cboOs").val(), $("#cboUp").val());
                                getNotifications()
                            } else {
                                new Noty(setMessage("Ocurrió un error al obtener los datos.", 'error', 'topCenter', timingNoty)).show();
                                return;
                            }
                        },
                        error: function (error) {
                            console.log(error);
                        }
                    });
                } else {
                    new Noty(setMessage("Ocurrió un error al obtener los datos de la observación.", 'error', 'topCenter', timingNoty)).show();
                    return;
                }
            }
        });
        
    });
});

var obtenerSelectDatosEfiscal = function () {
    $.ajax({
        url: __lur[1],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = JSON.parse(response.d);

            const select = $("#cboEfiscal");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.id_efiscal,
                    text: item.efiscal
                }));
            });

            select.val(cveEfiscald);
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosOS = function (txtEfiscal) {
    $.ajax({
        url: __lur[2],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_txtEfiscal' : '" + txtEfiscal + "' }",
        async: true,
        success: function (response) {
            const datos = JSON.parse(response.d);

            const select = $("#cboOs");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.Cve_Organo_Superior,
                    text: item.Txt_Organo_Superior
                }));
            });

            select.val(cveOSd);
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosUP = function (txtEfiscal, txtOS, tipo) {
    $.ajax({
        url: __lur[3],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_txtEfiscal' : '" + txtEfiscal + "', '_txtOS' : '" + txtOS + "' }",
        async: true,
        success: function (response) {
            const datos = JSON.parse(response.d);

            const select = $("#cboUp");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.Cve_Unidad_Presupuestal,
                    text: item.Txt_Unidad_Presupuestal
                }));
            });

            if (cveUPd === '') {
                select.val(0);
            } else {
                if (tipo === 'cambio') {
                    if (txtOS === cveOSd) {
                        select.val(cveUPd);
                    } else {
                        select.val(0);

                    }
                } else {
                    select.val(cveUPd);
                }
            }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosAlineacion = function () {
    $.ajax({
        url: __lur[4],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboAlineacion");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_ALINEACION,
                    text: item.DESC_ALINEACION
                }));
            });

        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosProceso = function (id, OS, UP) {
    $.ajax({
        url: __lur[6],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + OS + "', '_UP' : '" + UP + "' }",
        //data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboProceso");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ProcesoID,
                    text: item.NombreProceso
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosNivelRiesgo = function (id) {
    $.ajax({
        url: __lur[7],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboNivelRiesgo");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_NIVEL_RIESGO,
                    text: item.DESC_NIVEL_RIESGO
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosClasRiesgo = function (id) {
    $.ajax({
        url: __lur[8],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboClasRiesgo");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CLAS_RIESGO,
                    text: item.DESC_CLAS_RIESGO
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosImpacto = function (id) {
    $.ajax({
        url: __lur[9],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboImpactoInicio");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_IMPACTO,
                    text: item.VALOR_IMPACTO
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosProbabilidad = function (id) {
    $.ajax({
        url: __lur[10],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboProbabilidadInicio");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_PROBABILIDAD,
                    text: item.VALOR_PROBABILIDAD
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosCuadrante = function (id) {
    $.ajax({
        url: __lur[11],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboCuadranteInicio");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CUADRANTE,
                    text: item.DESC_CUADRANTE
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosEstrategia = function (id) {
    $.ajax({
        url: __lur[12],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboEstrategia");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_ESTRATEGIA,
                    text: item.DESC_ESTRATEGIA
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControl = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControl");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosImpactoFin = function (id) {
    $.ajax({
        url: __lur[9],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboImpactoFin");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_IMPACTO,
                    text: item.VALOR_IMPACTO
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosProbabilidadFin = function (id) {
    $.ajax({
        url: __lur[10],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboProbabilidadFin");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_PROBABILIDAD,
                    text: item.VALOR_PROBABILIDAD
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosCuadranteFin = function (id) {
    $.ajax({
        url: __lur[11],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboCuadranteFin");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CUADRANTE,
                    text: item.DESC_CUADRANTE
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosClasFactor = function (id) {
    $.ajax({
        url: __lur[17],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboClasFactor");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CLAS_FACTOR,
                    text: item.DESC_CLAS_FACTOR
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControlFactor = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControlFactor");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosTipoFactor = function (id) {
    $.ajax({
        url: __lur[18],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboTipoFactor");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_TIPO_FACTOR,
                    text: item.DESC_TIPO_FACTOR
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosTipoControl = function (id) {
    $.ajax({
        url: __lur[23],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboTipoControl");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_TIPO_CONTROL,
                    text: item.DESC_TIPO_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosDeterminacion = function (id) {
    $.ajax({
        url: __lur[24],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboDeterminacion");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_DETERMINACION,
                    text: item.DESC_DETERMINACION
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControlControl1 = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControlDocumentado");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControlControl2 = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControlFormalizado");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControlControl3 = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControlAplica");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosControlControl4 = function (id) {
    $.ajax({
        url: __lur[13],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboControlEfectivo");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_CONTROL,
                    text: item.DESC_CONTROL
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosResponsable = function (id, OS, UP) {
    $.ajax({
        url: __lur[42],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + OS + "', '_UP' : '" + UP + "' }",
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboResponsable");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_RESPONSABLE,
                    text: item.NOMBRE_RESPONSABLE
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosMeses = function (id) {
    $.ajax({
        url: __lur[43],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboMes");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_MES,
                    text: item.DESC_MES
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

var obtenerSelectDatosTrimestre = function (id) {
    $.ajax({
        url: __lur[31],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        async: true,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboTrimestre");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_TRIMESTRE,
                    text: item.DESC_TRIMESTRE
                }));
            });
            // if (id !== 0) {
            //     select.val(id);
            //     select.attr("disabled", true)
            // } else {
            //     select.val(0);
            //     select.removeAttr("disabled");
            // }
        },
        error: function (xhr, status, error) {
            console.error("Error al obtener los datos:", error);
        }
    });
}

function validarFormularioRiesgo() {
    let esValido = true;

    const txtRiesgo = $("#txtRiesgo").val().trim();
    if (txtRiesgo === "") {
        mostrarError("txtRiesgo", "Ingrese la descripción del riesgo.");
        esValido = false;
    }

    // const txtPosibleRiesgo = $("#txtPosibleRiesgo").val().trim();
    // if (txtPosibleRiesgo === "") {
    //     mostrarError("txtPosibleRiesgo", "Ingrese su posible efecto de riesgo.");
    //     esValido = false;
    // }

    const cboProceso = $("#cboProceso").val();
    if (cboProceso === "" || cboProceso === "0") {
        mostrarError("cboProceso", "Elija un proceso.");
        esValido = false;
    }

    const cboNivelRiesgo = $("#cboNivelRiesgo").val();
    if (cboNivelRiesgo === "" || cboNivelRiesgo === "0") {
        mostrarError("cboNivelRiesgo", "Elija un nivel de riesgo.");
        esValido = false;
    }

    const cboClasRiesgo = $("#cboClasRiesgo").val();
    if (cboClasRiesgo === "" || cboClasRiesgo === "0") {
        mostrarError("cboClasRiesgo", "Elija una clasificación de riesgo.");
        esValido = false;
    }

    const txtOSProceso = $("#txtOSProceso").val().trim();
    if (txtOSProceso === "" || txtOSProceso.length !== 2) {
        mostrarError("txtOSProceso", "No hay ningun valor para el organo superior responsable, elija su proceso de favor.");
        esValido = false;
    }
    const txtUPProceso = $("#txtUPProceso").val().trim();
    if (txtUPProceso === "" || txtUPProceso.length !== 2) {
        mostrarError("txtUPProceso", "No hay ningun valor para la unidad presupuestal responsable, elija su proceso de favor.");
        esValido = false;
    }

    // const cboImpacto = $("#cboImpactoInicio").val();
    // if (cboImpacto === "" || cboImpacto === "0") {
    //     mostrarError("cboImpacto", "Elija un impacto inicial para el riesgo.");
    //     esValido = false;
    // }

    // const cboProbabilidad = $("#cboProbabilidadInicio").val();
    // if (cboProbabilidad === "" || cboProbabilidad === "0") {
    //     mostrarError("cboProbabilidad", "Elija una probabilidad de ocurrencia inicial para el riesgo.");
    //     esValido = false;
    // }

    // const cboCuadrante = $("#cboCuadranteInicio").val();
    // if (cboCuadrante === "" || cboCuadrante === "0") {
    //     mostrarError("cboCuadrante", "Elija un cuadrante inicial para el riesgo.");
    //     esValido = false;
    // }

    // const cboImpactoFin = $("#cboImpactoFin").val();
    // if (cboImpactoFin === "" || cboImpactoFin === "0") {
    //     mostrarError("cboImpactoFin", "Elija un impacto final para el riesgo.");
    //     esValido = false;
    // }

    // const cboProbabilidadFin = $("#cboProbabilidadFin").val();
    // if (cboProbabilidadFin === "" || cboProbabilidadFin === "0") {
    //     mostrarError("cboProbabilidadFin", "Elija una probabilidad de ocurrencia final para el riesgo.");
    //     esValido = false;
    // }

    // const cboCuadranteFin = $("#cboCuadranteFin").val();
    // if (cboCuadranteFin === "" || cboCuadranteFin === "0") {
    //     mostrarError("cboCuadranteFin", "Elija un cuadrante final para el riesgo.");
    //     esValido = false;
    // }

    // const cboControl = $("#cboControl").val();
    // if (cboControl === "" || cboControl === "0") {
    //     mostrarError("cboControl", "Elija si el riesgo esta controlado o no.");
    //     esValido = false;
    // }

    // const cboEstrategia = $("#cboEstrategia").val();
    // if (cboEstrategia === "" || cboEstrategia === "0") {
    //     mostrarError("cboEstrategia", "Elija una estrategia para el riesgo.");
    //     esValido = false;
    // }

    return esValido;
}

function validarFormularioFactor() {
    let esValido = true;

    const txtFolioFactor = $("#txtFolioFactor").val().trim();
    if (txtFolioFactor === "") {
        mostrarError("txtFolioFactor", "Ocurrio un error con el folio, vuelve a ingresar desde un principio en los datos.");
        esValido = false;
    }

    const txtFactorRiesgo = $("#txtFactorRiesgo").val().trim();
    if (txtFactorRiesgo === "") {
        mostrarError("txtFactorRiesgo", "No puede ir vacio un factor de riesgo.");
        esValido = false;
    }

    const cboClasFactor = $("#cboClasFactor").val();
    if (cboClasFactor === "" || cboClasFactor === "0") {
        mostrarError("cboClasFactor", "Elija una clasificación para el factor.");
        esValido = false;
    }

    const cboControlFactor = $("#cboControlFactor").val();
    if (cboControlFactor === "" || cboControlFactor === "0") {
        mostrarError("cboControlFactor", "Elija un control para el factor.");
        esValido = false;
    }

    const cboTipoFactor = $("#cboTipoFactor").val();
    if (cboTipoFactor === "" || cboTipoFactor === "0") {
        mostrarError("cboTipoFactor", "Elija un tipo de factor.");
        esValido = false;
    }

    return esValido;
}

function validarFormularioControl() {
    let esValido = true;

    const txtFolioControlFactor = $("#txtFolioControlFactor").val().trim();
    if (txtFolioControlFactor === "") {
        mostrarError("txtFolioControlFactor", "Ocurrio un error con el folio, vuelve a ingresar desde un principio en los datos.");
        esValido = false;
    }

    const txtDescControlFactor = $("#txtDescControlFactor").val().trim();
    if (txtDescControlFactor === "") {
        mostrarError("txtDescControlFactor", "No puede ir vacio la descripción del control.");
        esValido = false;
    }

    const cboTipoControl = $("#cboTipoControl").val();
    if (cboTipoControl === "" || cboTipoControl === "0") {
        mostrarError("cboTipoControl", "Elija un tipo de control.");
        esValido = false;
    }

    const cboDeterminacion = $("#cboDeterminacion").val();
    if (cboDeterminacion === "" || cboDeterminacion === "0") {
        mostrarError("cboDeterminacion", "Elija una determinacion para el control.");
        esValido = false;
    }

    const cboControlDocumentado = $("#cboControlDocumentado").val();
    if (cboControlDocumentado === "" || cboControlDocumentado === "0") {
        mostrarError("cboControlDocumentado", "Elija entre si y no, si está documentado el control.");
        esValido = false;
    }

    const cboControlFormalizado = $("#cboControlFormalizado").val();
    if (cboControlFormalizado === "" || cboControlFormalizado === "0") {
        mostrarError("cboControlFormalizado", "Elija entre si y no, si está formalizado el control.");
        esValido = false;
    }

    const cboControlAplica = $("#cboControlAplica").val();
    if (cboControlAplica === "" || cboControlAplica === "0") {
        mostrarError("cboControlAplica", "Elija entre si y no, si aplica el control.");
        esValido = false;
    }

    const cboControlEfectivo = $("#cboControlEfectivo").val();
    if (cboControlEfectivo === "" || cboControlEfectivo === "0") {
        mostrarError("cboControlEfectivo", "Elija entre si y no, si es efectivo el control.");
        esValido = false;
    }

    return esValido;
}

function validarFormularioAccion() {
    let esValido = true;

    const txtDescAccion = $("#txtDescAccion").val().trim();
    if (txtDescAccion === "") {
        mostrarError("txtDescAccion", "Describa su nueva acción.");
        esValido = false;
    }

    return esValido;
}

function validarFormularioActividad() {
    let esValido = true;

    // const txtResponsableActividad = $("#txtResponsableActividad").val().trim();
    // if (txtResponsableActividad === "") {
    //     mostrarError("txtResponsableActividad", "Ingrese el responsable de la actividad.");
    //     esValido = false;
    // }

    const cboResponsable = $("#cboResponsable").val();
    if (cboResponsable === "" || cboResponsable === "0") {
        mostrarError("cboResponsable", "Elija un responsable para la actividad.");
        esValido = false;
    }

    const txtDescActividad = $("#txtDescActividad").val().trim();
    if (txtDescActividad === "") {
        mostrarError("txtDescActividad", "Ingrese la descripción de la actividad.");
        esValido = false;
    }

    const txtNoActividad = $("#txtNoActividad").val().trim();
    if (txtNoActividad === "") {
        mostrarError("txtNoActividad", "Ocurrio un error con obtener el número de actividad.");
        esValido = false;
    }

    const cboTrimestre = $("#cboTrimestre").val();
    if (cboTrimestre === "" || cboTrimestre === "0") {
        mostrarError("cboTrimestre", "Elija el trimestre de la actividad.");
        esValido = false;
    }

    const cboMes = $("#cboMes").val();
    if (cboMes === "" || cboMes === "0") {
        mostrarError("cboMes", "Elija un mes.");
        esValido = false;
    }

    // const cboTipoReporte = $("#cboTipoReporte").val();
    // if (cboTipoReporte === "" || cboTipoReporte === "0") {
    //     mostrarError("cboTipoReporte", "Elija el tipo de reporte.");
    //     esValido = false;
    // }

    return esValido;
}

function validarFormularioAlineacion() {
    let esValido = true;

    const cboAlineacion = $("#cboAlineacion").val();
    if (cboAlineacion === "" || cboAlineacion === "0") {
        mostrarError("cboAlineacion", "Seleccione una alineación.");
        esValido = false;
    }

    const txtAlineacion = $("#txtAlineacion").val().trim();
    if (txtAlineacion === "") {
        mostrarError("txtAlineacion", "Ingrese la descripción de la alineación.");
        esValido = false;
    }

    const cboEfiscal = $("#cboEfiscal").val();
    if (cboEfiscal === "" || cboEfiscal === "0") {
        mostrarError("cboEfiscal", "Seleccione el año fiscal.");
        esValido = false;
    }

    const txtNoFolio = $("#txtNoFolio").val().trim();
    if (txtNoFolio === "") {
        mostrarError("txtNoFolio", "No hay ningun valor para el número de riesgo, elija su proceso de favor.");
        esValido = false;
    }

    const cboOs = $("#cboOs").val();
    if (cboOs === "" || cboOs === "0") {
        mostrarError("cboOs", "El organo superior esta vacio, espere a que cargue los datos");
        esValido = false;
    }

    const cboUp = $("#cboUp").val();
    if (cboUp === "" || cboUp === "0") {
        mostrarError("cboUp", "La unidad presupuestal esta vacio, espere a que cargue los datos.");
        esValido = false;
    }

    return esValido;
}

function validarFormularioValoresInicial() {
    let esValido = true;

    const txtPosibleRiesgo = $("#txtPosibleRiesgo").val().trim();
    if (txtPosibleRiesgo === "") {
        mostrarError("txtPosibleRiesgo", "Ingrese su posible efecto de riesgo.");
        esValido = false;
    }

    const cboImpacto = $("#cboImpactoInicio").val();
    if (cboImpacto === "" || cboImpacto === "0") {
        mostrarError("cboImpacto", "Elija un impacto inicial para el riesgo.");
        esValido = false;
    }

    const cboProbabilidad = $("#cboProbabilidadInicio").val();
    if (cboProbabilidad === "" || cboProbabilidad === "0") {
        mostrarError("cboProbabilidad", "Elija una probabilidad de ocurrencia inicial para el riesgo.");
        esValido = false;
    }

    const cboCuadrante = $("#cboCuadranteInicio").val();
    if (cboCuadrante === "" || cboCuadrante === "0") {
        mostrarError("cboCuadrante", "Elija un cuadrante inicial para el riesgo.");
        esValido = false;
    }

    return esValido;
}

function validarFormularioValoresFinal() {
    let esValido = true;

    const cboImpactoFin = $("#cboImpactoFin").val();
    if (cboImpactoFin === "" || cboImpactoFin === "0") {
        mostrarError("cboImpactoFin", "Elija un impacto final para el riesgo.");
        esValido = false;
    }

    const cboProbabilidadFin = $("#cboProbabilidadFin").val();
    if (cboProbabilidadFin === "" || cboProbabilidadFin === "0") {
        mostrarError("cboProbabilidadFin", "Elija una probabilidad de ocurrencia final para el riesgo.");
        esValido = false;
    }

    const cboCuadranteFin = $("#cboCuadranteFin").val();
    if (cboCuadranteFin === "" || cboCuadranteFin === "0") {
        mostrarError("cboCuadranteFin", "Elija un cuadrante final para el riesgo.");
        esValido = false;
    }

    const cboControl = $("#cboControl").val();
    if (cboControl === "" || cboControl === "0") {
        mostrarError("cboControl", "Elija si el riesgo esta controlado o no.");
        esValido = false;
    }

    const cboEstrategia = $("#cboEstrategia").val();
    if (cboEstrategia === "" || cboEstrategia === "0") {
        mostrarError("cboEstrategia", "Elija una estrategia para el riesgo.");
        esValido = false;
    }

    return esValido;
}

function recargarTabla(idTabla, htmlFilas) {
    const tabla = $("#" + idTabla);

    if ($.fn.DataTable.isDataTable(tabla)) {
        tabla.DataTable().clear().destroy();
    }

    tabla.find("tbody").html(htmlFilas);

    initDataTable(idTabla);
}

function initDataTable(idElemento) {
    const selector = "#" + idElemento;
    const $elemento = $(selector);

    $elemento.DataTable({
        responsive: true,
        paging: true,
        searching: true,
        ordering: true,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, 'Todos']
        ],
        fixedColumns: true,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        },
        drawCallback: function () {
            $('.pagination').addClass('pagination-sm');
        }
    });
}

function setValores(grupo) {
    const impacto = parseInt($(`#cboImpacto${grupo}`).val()) || 0;
    const probabilidad = parseInt($(`#cboProbabilidad${grupo}`).val()) || 0;

    calCuadrante(probabilidad, impacto, `#cboCuadrante${grupo}`);
}

function calCuadrante(probabilidad, impacto, idCuadrante) {
    let cuadrante = '';

    if (probabilidad > 5 && impacto > 5) {
        cuadrante = 1;
    } else if (probabilidad > 5 && impacto >= 1 && impacto <= 5) {
        cuadrante = 2;
    } else if (probabilidad >= 1 && probabilidad <= 5 && impacto >= 1 && impacto <= 5) {
        cuadrante = 3;
    } else if (probabilidad >= 1 && probabilidad <= 5 && impacto > 5) {
        cuadrante = 4;
    } else {
        cuadrante = 0;
    }

    $(idCuadrante).val(cuadrante);
}

function clearForms(type) {
    if (type === 1) {
        $("#cboAlineacion").val(0);
        $("#txtAlineacion").val("");
        $("#txtNoFolio").val("");
    } else if (type === 2) {
        $("#cboProceso").val(0);
        $("#cboNivelRiesgo").val(0);
        $("#cboClasRiesgo").val(0);
        $("#cboImpactoInicio").val(0);
        $("#cboProbabilidadInicio").val(0);
        $("#cboCuadranteInicio").val(0)
        $("#cboEstrategia").val(0);
        $("#cboControl").val(0);
        $("#cboImpactoFin").val(0);
        $("#cboProbabilidadFin").val(0);
        $("#cboCuadranteFin").val(0)
        $("#txtOSProceso").val("");
        $("#txtUPProceso").val("");
        $("#txtNoFolio").val("");
        $("#txtRiesgo").val("");
        $("#txtPosibleRiesgo").val("");
    } else if (type === 3) {
        $("#cboClasFactor").val(0);
        $("#cboControlFactor").val(0);
        $("#cboTipoFactor").val(0);
        $("#txtFolioFactor").val("");
        $("#txtFactorRiesgo").val("");
    } else if (type === 4) {
        $("#cboTipoControl").val(0);
        $("#cboDeterminacion").val(0);
        $("#cboControlDocumentado").val(0);
        $("#cboControlFormalizado").val(0);
        $("#cboControlAplica").val(0);
        $("#cboControlEfectivo").val(0);
        $("#txtDescControlFactor").val("");
    } else if (type === 5) {
        $("#txtDescAccion").val("");
    } else if (type === 6) {
        $("#txtDescActividad").val("");
        $("#cboResponsable").val(0);
        $("#cboMes").val(0);
        $("#cboTrimestre").val(0);
    }
}

function getChartData(cveOS, cveUP, _type, __bytes, __class) {
    var data = [];
    var data2 = [];
    if (cveOS === 0 && cveUP === 0 || cveOS === '0' && cveUP === '0' || cveOS === "null" && cveUP === "null" || cveOS === null && cveUP === null) {
        new Noty(setMessage('Espere a obtener más datos...', 'alert', 'bottomRight', timingNoty)).show();
        return;
    } else {
        $.ajax({
            url: __lur[46],
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "', '_TypePrint' : '" + _type + "', '_vt' : '" + __bytes + "' }",
            async: false,
            success: function (result) {
                var datos = result.d;

                datos.forEach(function (item) {
                    data.push([item.VALOR_IMPACTO, item.VALOR_PROBABILIDAD])
                });

                datos.forEach(function (item) {
                    data2.push([item.VALOR_IMPACTO1, item.VALOR_PROBABILIDAD1])
                });

                var chartDom = document.getElementById('divChartMapaF');
                var myChart = echarts.init(chartDom);
                var option;

                var chartDom2 = document.getElementById('divChartMapaI');
                var myChart2 = echarts.init(chartDom2);
                var option2;

                var option = {
                    //   title: {
                    //     text: 'Matriz de Riesgo'
                    //   },
                    xAxis: {
                        type: 'value',
                        name: 'Impacto',
                        min: 0,
                        max: 10,
                        nameTextStyle: {
                            color: getGrays()['1100'],  // Azul cielo, por ejemplo
                            fontWeight: 'bold'
                        },
                        nameLocation: 'middle',
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Probabilidad',
                        min: 0,
                        max: 10,
                        nameTextStyle: {
                            color: getGrays()['1100'],  // Azul cielo, por ejemplo
                            fontWeight: 'bold'
                        },
                        nameLocation: 'middle',
                    },
                    visualMap: {
                        show: false,
                        pieces: [
                            { gt: 0, lt: 10, color: getGrays()['1100'] },   // Verde
                        ],
                        dimension: 1
                    },
                    series: [{
                        name: 'Riesgos',
                        type: 'scatter',
                        symbolSize: 20,
                        data: data,
                        label: {
                            show: true,
                            formatter: function (param) {
                                return `(${param.data[0]}, ${param.data[1]})`;
                            },
                            position: 'top',
                            color: getGrays()['1100'],
                        },
                        markArea: {
                            silent: true,
                            data: [
                                [{
                                    xAxis: 0,
                                    yAxis: 0,
                                    itemStyle: { color: 'rgba(144, 238, 144, 0.45)' }
                                }, {
                                    xAxis: 5,
                                    yAxis: 5
                                }],
                                [{
                                    xAxis: 0,
                                    yAxis: 5,
                                    itemStyle: { color: 'rgba(255, 255, 150, 0.45)' }
                                }, {
                                    xAxis: 5,
                                    yAxis: 10
                                }],
                                [{
                                    xAxis: 5,
                                    yAxis: 0,
                                    itemStyle: { color: 'rgba(135, 206, 250, 0.45)' }
                                }, {
                                    xAxis: 10,
                                    yAxis: 5
                                }],
                                [{
                                    xAxis: 5,
                                    yAxis: 5,
                                    itemStyle: { color: 'rgba(240, 128, 128, 0.45)' }
                                }, {
                                    xAxis: 10,
                                    yAxis: 10
                                }]
                            ]
                        },
                        markLine: {
                            silent: true,
                            lineStyle: {
                                type: 'dashed',
                                color: getGrays()['1100']
                            },
                            data: [
                                { xAxis: 5 },
                                { yAxis: 5 }
                            ]
                        }
                    }],
                };

                var option2 = {
                    //   title: {
                    //     text: 'Matriz de Riesgo'
                    //   },
                    xAxis: {
                        type: 'value',
                        name: 'Impacto',
                        min: 0,
                        max: 10,
                        nameTextStyle: {
                            color: getGrays()['1100'],  // Azul cielo, por ejemplo
                            fontWeight: 'bold'
                        },
                        nameLocation: 'middle',
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Probabilidad',
                        min: 0,
                        max: 10,
                        nameTextStyle: {
                            color: getGrays()['1100'],  // Azul cielo, por ejemplo
                            fontWeight: 'bold'
                        },
                        nameLocation: 'middle',
                    },
                    visualMap: {
                        show: false,
                        pieces: [
                            { gt: 0, lt: 10, color: getGrays()['1100'] },   // Verde
                        ],
                        dimension: 1
                    },
                    series: [{
                        name: 'Riesgos',
                        type: 'scatter',
                        symbolSize: 20,
                        data: data2,
                        label: {
                            show: true,
                            formatter: function (param) {
                                return `(${param.data[0]}, ${param.data[1]})`;
                            },
                            position: 'top',
                            color: getGrays()['1100'],
                        },
                        markArea: {
                            silent: true,
                            data: [
                                [{
                                    xAxis: 0,
                                    yAxis: 0,
                                    itemStyle: { color: 'rgba(144, 238, 144, 0.45)' }
                                }, {
                                    xAxis: 5,
                                    yAxis: 5
                                }],
                                [{
                                    xAxis: 0,
                                    yAxis: 5,
                                    itemStyle: { color: 'rgba(255, 255, 150, 0.45)' }
                                }, {
                                    xAxis: 5,
                                    yAxis: 10
                                }],
                                [{
                                    xAxis: 5,
                                    yAxis: 0,
                                    itemStyle: { color: 'rgba(135, 206, 250, 0.45)' }
                                }, {
                                    xAxis: 10,
                                    yAxis: 5
                                }],
                                [{
                                    xAxis: 5,
                                    yAxis: 5,
                                    itemStyle: { color: 'rgba(240, 128, 128, 0.45)' }
                                }, {
                                    xAxis: 10,
                                    yAxis: 10
                                }]
                            ]
                        },
                        markLine: {
                            silent: true,
                            lineStyle: {
                                type: 'dashed',
                                color: getGrays()['1100']
                            },
                            data: [
                                { xAxis: 5 },
                                { yAxis: 5 }
                            ]
                        }
                    }],
                };

                myChart.setOption(option);
                myChart2.setOption(option2);

                if (__class === 0) {
                    _type = 'printReport';
                }

                if (_type === 'printReport') {
                    var imgData = myChart.getDataURL({
                        type: 'png',               // 'png' o 'jpeg'
                        pixelRatio: 3,             // Aumenta la resolución de la imagen
                        backgroundColor: '#fff',   // Color de fondo (transparente si no se define)
                        excludeComponents: ['toolbox'], // Excluye elementos como leyendas o títulos
                    })

                    if (__class === 0) {
                        getChartData(cveOS, cveUP, 'printReport', imgData, 1)
                    } else {
                        new Noty(setMessage("Reporte creado.", 'success', 'bottomRight', timingNoty)).show();
                        window.open('../../Reportes/WebFrmRpt.aspx', 'REPORTE', 'width=650,height=600,scrollbars=yes,toolbar=no,left=10,top=10,resizable=yes');
                    }
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

}

function alertConfirmMessage(message) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-outline-success m-1',
            denyButton: 'btn btn-outline-danger m-1',
        },
        buttonsStyling: false
    });

    return swalWithBootstrapButtons.fire({
        title: message,
        showDenyButton: true,
        //confirmButtonText: '✅ SI',
        //denyButtonText: '❌ NO',
        confirmButtonText: '<lottie-player src="../../Content/assets/img/animated-icons/custom_animations/92577-complete-check.json" mode="bounce" background="transparent" speed="0.5" style="width: 35px; align-content: center; margin: 0 auto" loop autoplay class="d-flex align-content-center my-2 mx-2"></lottie-player> SI',
        denyButtonText: '<lottie-player src="../../Content/assets/img/animated-icons/custom_animations/92701-x-mark.json" mode="bounce" background="transparent" speed="0.5" style="width: 35px; align-content: center; margin: 0 auto" loop autoplay class="d-flex align-content-center my-2 mx-2"></lottie-player> NO',
    }).then((result) => {
        return result.isConfirmed;
    });
}

function getNotifications() {
    const rutaActual = window.location.pathname;
    const splitRuta = rutaActual.split("/")
    var rutaChange = '';

    console.log(splitRuta);

    //SERVIDOR LOCAL
    if (splitRuta[2] === "main" || splitRuta[2] === "Main") {
        rutaChange = 'WebFrmPTAR001.aspx/getN'
    } else {
        rutaChange = 'Main/WebFrmPTAR001.aspx/getN'
    }

    //SERVIDOR EN LINEA
    // if (splitRuta[3] === "main" || splitRuta[3] === "Main") {
    //     rutaChange = 'WebFrmPTAR001.aspx/getN'
    // } else {
    //     rutaChange = 'Main/WebFrmPTAR001.aspx/getN'
    // }

    //console.log(rutaChange);
    var html = '';
    $.ajax({
        url: rutaChange,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOSd + "', '_UP' : '" + cveUPd + "', '_rolUser' : '" + idRolUser + "' }",
        //data: null,
        success: function (result) {
            var datos = result.d;
            if (datos !== 0) {
                datos.forEach(function (item) {
                    if (item.SN_SOLVENTA === null) {
                        html += `<div class='fs-10 mb-1'>
                                        <a class='notification bg-warning-subtle' href='#!'>
                                            <div class='notification-body'>
                                                <p class='mb-2'><strong>${item.NOMBRES}</strong> envió observaciones para su riesgo: ${item.CONSECUTIVO}</p>
                                                <p class='mb-0'>Observación: <strong>${item.DESC_OBSERVACION}</strong></p>
                                            </div>
                                        </a>
                                    </div>`
                        $("#numberNotis").html(datos.length);
                        $("#numberNotis").show();
                    } else {
                        $("#numberNotis").html(0);
                        $("#numberNotis").hide();
                    }
                });

                $("#notis").html(html);
            } else {
                new Noty(setMessage("Error al obtener información...", 'error', 'bottomRight', 3000)).show();
            }
        },
        error: function (error) {
            new Noty(setMessage(error, 'alert', 'bottomRight', 3000)).show();
        }
    });
}