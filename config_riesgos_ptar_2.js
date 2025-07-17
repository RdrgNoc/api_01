'use strict';
const timingNoty = 3500;
var idUser = $("#MainContent_hddnIdUsuario").val();
var idRolUser = $("#MainContent_hddnPage").val();
var cveOSd = $("#MainContent_hddnOS").val().trim();
var cveUPd = $("#MainContent_hddnUP").val().trim();
var cveEfiscald = $("#MainContent_hddnEfiscal").val().trim();

var cveOrg = $("#cboOs").val();
var cveUni = $("#cboUp").val();
var eFiscal = $("#cboEfiscal").val();

//const accord01 = $("#accordionInsert");

const divForFile = $("#divInputArchivo");
const inputFile = $("#customFile");
const divForLink = $("#divInputEnlace");
const inputLink = $("#txtUrl");



var __lur = [
    'WebFrmPTAR002.aspx/getEfiscalCombo', //[0]
    'WebFrmPTAR002.aspx/getOSCombo', //[1]
    'WebFrmPTAR002.aspx/getUPCombo', //[2]
    'WebFrmPTAR002.aspx/getDataCtrlRiesgo', //[3]
    'WebFrmPTAR002.aspx/getDataCtrlActividad', //[4]
    'WebFrmPTAR002.aspx/getDataCtrlEvidencia', //[5]
    'WebFrmPTAR002.aspx/getDataActividadById', //[6]
    'WebFrmPTAR002.aspx/getTipoDocumentoCombo', //[7]
    'WebFrmPTAR002.aspx/getTipoReporteCombo', //[8]
    'WebFrmPTAR002.aspx/setEvidenciaDoc', //[9]
    'WebFrmPTAR002.aspx/setEvidenciaUrl', //[10]
    'WebFrmPTAR002.aspx/getDocumentoEvidencia', //[11]
];

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

function getDataRiesgos(cveOS, cveUP) {
    var html = "";
    $.ajax({
        url: __lur[3],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length !== 0) {
                    new Noty(setMessage("Contiene riesgos.", 'info', 'topCenter', timingNoty)).show();
                    datos.forEach(function (item) {
                        html += `<div class='alert light alert-dismissible fade show' role='alert'><strong>${item.DESC_RIESGO}</strong><button class='btn-close btn btn-sm btnSeeDatosRiesgoxEvidencia' type='button' data-ctrl-riesgo='${item.ID_CTRL_RIESGO}' style='--falcon-btn-close-bg : url('') !important;'><span class='far fa-arrow-alt-circle-right fs-8'></span></button></div>`
                    });
                    $("#containerRiesgos")[0].innerHTML = html
                } else {
                    $("#containerRiesgos")[0].innerHTML = "No existen riesgos, primero inserte sus alineaciones junto con los riesgos."
                    new Noty(setMessage("Ocurrio un error al mostrar resultados.", 'error', 'topCenter', timingNoty)).show();
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

function getDataActividad(_idRiesgo, cveOS, cveUP) {
    //getDataAccionById(idAccion);
    var html = "";
    $.ajax({
        url: __lur[4],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlRiesgo' : '" + _idRiesgo + "', '_OS' : '" + cveOS + "', '_UP' : '" + cveUP + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length !== 0) {
                    new Noty(setMessage("El riesgo contiene datos.", 'info', 'topCenter', timingNoty)).show();
                    datos.forEach(function (item) {
                        html += `<tr>
                                    <td>${item.DESC_TRIMESTRE} - ${item.DESC_ACTIVIDAD}</td>
                                    <td class='text-end'>
                                        <div>
                                            <button class='btn btn-link p-0 btnSeeEditActividad' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Editar' data-ctrl-actividad='${item.ID_CTRL_ACTIVIDAD}'><span class='text-500 fas fa-edit'></span></button>
                                            <button class='btn btn-link p-0 ms-2 btnSeeDatosActividad' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Ver' data-ctrl-actividad='${item.ID_CTRL_ACTIVIDAD}'><span class='text-500 fas fa-eye'></span></button>
                                        </div>
                                    </td>
                                </tr>`
                    });
                    $("#containerActividades")[0].innerHTML = html
                } else {
                    $("#containerActividades")[0].innerHTML = "Sin datos."
                    new Noty(setMessage("Sin datos de actividades en el riesgo, favor de registrar los datos restantes.", 'info', 'topCenter', timingNoty)).show();
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

function getDataActividadById(idActividad) {
    var html = "";
    $.ajax({
        url: __lur[6],
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
                    $("#divTxtActividad")[0].innerHTML = datos[0].DESC_TRIMESTRE + " - " + datos[0].DESC_ACTIVIDAD
                    $("#btnS_Evidencia").attr("data-ctrl1", datos[0].ID_CTRL_ACTIVIDAD)
                } else {
                    new Noty(setMessage("Ocurrio un error al intentar obtener los datos de la actividad.", 'info', 'topCenter', timingNoty)).show();
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

function getDataEvidencia(idActividad) {
    getDataActividadById(idActividad);
    var html = "";
    $.ajax({
        url: __lur[5],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlActividad' : '" + idActividad + "' }",
        async: false,
        success: function (result) {
            const datos = result.d;
            if (datos !== 'error') {
                console.log(datos);
                if (datos.length !== 0) {
                    new Noty(setMessage("La actividad contiene evidencias. " + datos.length + "", 'info', 'topCenter', timingNoty)).show();
                    datos.forEach(function (item) {
                        if (item.ID_TIPO_DOCUMENTO === 1) {
                            //html += `<div class='alert light alert-dismissible fade show' role='alert'><strong>${item.DESC_EVIDENCIA} - ${item.DESC_DOCUMENTO}</strong><button class='btn-close btn btn-sm btnDownload' type='button' data-ctrl-evidencia='${item.ID_CTRL_EVIDENCIA}' style='--falcon-btn-close-bg : url('') !important;'><span class='far fa-arrow-alt-circle-right fs-8'></span></button></div>`;
                            // html += `<div class="fs-10" style="max-width: 25rem;">
                            //             <a class="notification btnDownloadDoc" type="button" data-ctrl-evidencia='${item.ID_CTRL_EVIDENCIA}'>
                            //                 <div class="notification-body">
                            //                     <p class="m-0">${item.DESC_DOCUMENTO} <strong>${item.NOMBRE_EVIDENCIA}</strong></p>
                            //                 </div>
                            //             </a>
                            //         </div>`;
                                
                            html += `<tr>
                                        <td>${item.DESC_DOCUMENTO}</td>
                                        <td>${item.NOMBRE_EVIDENCIA}</td>
                                        <td class='text-end'>
                                            <div>
                                                <button class='btn btn-link p-0 btnDownloadDoc' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Documento' data-ctrl-evidencia='${item.ID_CTRL_EVIDENCIA}'><span class='text-500 fas fa-download'></span></button>
                                            </div>
                                        </td>
                                    </tr>`
                        } else if (item.ID_TIPO_DOCUMENTO === 2) {
                            //html += `<div class='alert light alert-dismissible fade show' role='alert'><strong>${item.DESC_EVIDENCIA} - ${item.DESC_DOCUMENTO}</strong><button class='btn-close btn btn-sm btnDownload' type='button' data-ctrl-evidencia='${item.ID_CTRL_EVIDENCIA}' style='--falcon-btn-close-bg : url('') !important;'><span class='far fa-arrow-alt-circle-right fs-8'></span></button></div>`;
                            html += `<tr>
                                        <td>${item.DESC_DOCUMENTO}</td>
                                        <td>${item.NOMBRE_EVIDENCIA}</td>
                                        <td class='text-end'>
                                            <div>
                                                <button class='btn btn-link p-0 btnDownloadDoc' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Documento' data-ctrl-evidencia='${item.ID_CTRL_EVIDENCIA}'><span class='text-500 fas fa-download'></span></button>
                                            </div>
                                        </td>
                                    </tr>`
                        } else if (item.ID_TIPO_DOCUMENTO === 3) {
                            //html += `${item.DESC_EVIDENCIA} - ${item.URL_BUFALO}`;
                            // html += `<div class="fs-10" style="max-width: 25rem;">
                            //             <a class="notification" href="${item.URL_BUFALO}" target="_blank">
                            //                 <div class="notification-body">
                            //                     <p class="m-0">${item.DESC_DOCUMENTO} <strong>${item.DESC_EVIDENCIA}</strong></p>
                            //                 </div>
                            //             </a>
                            //         </div>`;
                            
                            html += `<tr>
                                        <td>${item.DESC_DOCUMENTO}</td>
                                        <td>${item.DESC_EVIDENCIA}</td>
                                        <td class='text-end'>
                                            <div>
                                                <a class='btn btn-link p-0' href="${item.URL_BUFALO}" target="_blank" type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Enlace'><span class='text-500 fas fa-link'></span></a>
                                            </div>
                                        </td>
                                    </tr>`
                        }
                    });
                    console.log(html);
                    $("#containerEvidencias")[0].innerHTML = html
                } else {
                    $("#containerEvidencias")[0].innerHTML = "Sin datos para esta actividad"
                    new Noty(setMessage("La actividad no contiene evidencias, favor de insertar al menos una evidencia.", 'info', 'topCenter', timingNoty)).show();
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

function getDataEvidenciaById(idEvidencia) {
    var html = "";
    $.ajax({
        url: __lur[11],
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_idCtrlEvidencia' : '" + idEvidencia + "' }",
        async: false,
        success: function (result) {
            var splitResponse = result.d.split("|")
            if (splitResponse[1] === '1') {
                new Noty(setMessage('Respuesta del servidor: ' + splitResponse[0] + '', 'success', 'bottomRight', timingNoty)).show();
                mostrarFichero(splitResponse[2]);
            // } else if (splitResponse[1] === '2') {
            //     new Noty(setMessage('Respuesta del servidor: ' + splitResponse[0] + '', 'success', 'bottomRight', timingNoty)).show();
            //     var splitResult = splitResponse[2].split(",")
            //     saveByteArray(splitResult[0] + splitResult[1], base64ToArrayBuffer(splitResult[2]), splitResult[3])
            } else {
                new Noty(setMessage('Respuesta del servidor: ' + splitResponse[0] + '', 'error', 'bottomRight', timingNoty)).show();
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function setDataEvidencia(dataLocal, idDocumento) {
    console.log(dataLocal);
    var urlsend = "";
    if (idDocumento === "1" || idDocumento === "2") {
        urlsend = __lur[9]
    } else if (idDocumento === "3") {
        urlsend = __lur[10]
    }
    console.log(urlsend);
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

$(document).ready(function () {
    //console.log("Sistema...");
    //accord01.hide();
    const modal01 = $('#modalActividadUpdate').modal();

    divForFile.hide();
    inputFile.hide();
    divForLink.hide();
    inputLink.hide();

    if (idRolUser === '101') {
        //console.log("Usuario captura");
        obtenerSelectDatosEfiscal();
        obtenerSelectDatosOS(cveEfiscald);
        obtenerSelectDatosUP(cveEfiscald, cveOSd, '');

        getDataRiesgos(cveOSd, cveUPd);
        obtenerSelectDatosTipoDocumento(0);
        obtenerSelectDatosTipoReporte(0);
    } else if (idRolUser === '201' || idRolUser === '301') {
        console.log("Usuario administrador")
    }

    $(document).on("click", ".btnSeeDatosRiesgoxEvidencia", function () {
        //$(".btnSeeDatosAlineacion").attr("disabled", true);
        var idReturn = $(this)[0].dataset.ctrlRiesgo;
        console.log(idReturn);

        getDataActividad(idReturn, $("#cboOs").val(), $("#cboUp").val());
    });

    $(document).on("click", ".btnSeeDatosActividad", function () {
        //$(".btnSeeDatosAlineacion").attr("disabled", true);
        var idReturn = $(this)[0].dataset.ctrlActividad;
        console.log(idReturn);

        getDataEvidencia(idReturn);
    });

    $(document).on("click", "#btnS_Evidencia", function () {
        $("#btnS_Evidencia").attr("disabled", true);
        var idReturn = $("#btnS_Evidencia")[0].dataset.ctrl1;
        var idDocumento = $("#btnS_Evidencia")[0].dataset.ctrlDocumento;
        var archivosBytes = [];

        if (idReturn === 0 || idReturn === "0" || idReturn === null) {
            new Noty(setMessage("Ocurrio un error al obtener información extra de la actividad", 'error', 'topCenter', timingNoty)).show();
            $("#btnS_Evidencia").removeAttr("disabled");
            return;
        }
        if (validarFormularioEvidencia(idDocumento) === true) {
            const txtDescEvidenciaData = $("#txtDescEvidencia").val().trim();
            if (idDocumento === "1" || idDocumento === "2") {
                let file = $("#customFile")[0].files[0];

                if (file) {
                    var fileName = file.name;
                    var reader = new FileReader();
                    const ext = getFileExtension(fileName)
                    reader.onload = function (e) {
                        var fileBytes = new Uint8Array(e.target.result);
                        archivosBytes.push(fileBytes);
                        const dataLocal = "{ '_idCtrlActividad' : '" + idReturn + "', '_idUsuario' : '" + idUser + "', '_idDocumento' : '" + idDocumento + "', '_txtDescEvidencia' : '" + txtDescEvidenciaData + "', '_extDoc' : '" + ext + "', '_nameDoc' : '" + fileName + "', 'listValue' : '" + fileBytes + "' }";
                        console.log("ARCHIVO: " + dataLocal);
                        setDataEvidencia(dataLocal, idDocumento);
                        getDataEvidencia(idReturn);
                    };
                    reader.readAsArrayBuffer(file);
                    $("#btnS_Evidencia").removeAttr("disabled");
                } else {
                    new Noty(setMessage('No ha insertado ningun archivo, favor de ingresarlo.', 'error', 'topCenter', timingNoty)).show();
                    $("#btnS_Evidencia").removeAttr("disabled");
                    return;
                }
            } else if (idDocumento === "3") {
                const txtUrlData = $("#txtUrl").val().trim();
                const dataLocal = "{ '_idCtrlActividad' : '" + idReturn + "', '_idUsuario' : '" + idUser + "', '_idDocumento' : '" + idDocumento + "', '_txtDescEvidencia' : '" + txtDescEvidenciaData + "', '_txtUrl' : '" + txtUrlData + "'  }";
                console.log("URL: " + dataLocal);
                setDataEvidencia(dataLocal, idDocumento);
                $("#btnS_Evidencia").removeAttr("disabled");
                getDataEvidencia(idReturn);
            }
        } else {
            $("#btnS_Evidencia").removeAttr("disabled");
        }
    });

    $(document).on("click", ".btnDownloadDoc", function () {
        //$(".btnSeeDatosAlineacion").attr("disabled", true);
        var idReturn = $(this)[0].dataset.ctrlEvidencia;
        console.log(idReturn);

        getDataEvidenciaById(idReturn);
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

    $(document).on("click", ".btnSeeEditActividad", function () {
        var idReturn = $(this)[0].dataset.ctrlActividad;
        console.log(idReturn);

        $("#btnUpdateActividad").attr("data-mctrl-actividad", idReturn);

        modal01.modal('show');
        modal01.modal('handleUpdate');
    });

    $(document).on("click", "#btnUpdateActividad", function () {
        var idReturn = $("#btnUpdateActividad")[0].dataset.mctrlActividad;
        console.log(idReturn);
    });
});

var obtenerSelectDatosEfiscal = function () {
    $.ajax({
        url: __lur[0],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
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
        url: __lur[1],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_txtEfiscal' : '" + txtEfiscal + "' }",
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
        url: __lur[2],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: "{ '_txtEfiscal' : '" + txtEfiscal + "', '_txtOS' : '" + txtOS + "' }",
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

var obtenerSelectDatosTipoReporte = function (id) {
    $.ajax({
        url: __lur[8],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboTipoReporte");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_TIPO_REPORTE,
                    text: item.DESC_TIPO_REPORTE
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

var obtenerSelectDatosTipoDocumento = function (id) {
    $.ajax({
        url: __lur[7],
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: null,
        success: function (response) {
            const datos = response.d;

            const select = $("#cboDocumento");
            select.empty();

            select.append($("<option>", {
                value: "0",
                text: "SELECCIONE"
            }));

            datos.forEach(function (item) {
                select.append($("<option>", {
                    value: item.ID_TIPO_DOCUMENTO,
                    text: item.DESC_DOCUMENTO
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

function validarFormularioEvidencia(_idDocumento) {
    let esValido = true;

    const txtDescEvidencia = $("#txtDescEvidencia").val().trim();
    if (txtDescEvidencia === "") {
        mostrarError("txtDescEvidencia", "Ingrese la descripción de la evidencia.");
        esValido = false;
    }

    const cboDocumento = $("#cboDocumento").val();
    if (cboDocumento === "" || cboDocumento === "0") {
        mostrarError("cboDocumento", "Elija el tipo de documento que desea cargar.");
        esValido = false;
    }

    if (_idDocumento === "1" || _idDocumento === "2") {

    } else if (_idDocumento === "3") {
        const txtUrl = $("#txtUrl").val().trim();
        if (txtUrl === "") {
            mostrarError("txtUrl", "Ingrese el enlace de la evidencia.");
            esValido = false;
        }
    }

    return esValido;
}