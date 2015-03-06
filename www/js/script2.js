

function ev_env_XML (p) {
	var v = null;
	switch (p) {
		case 'pj': v = {'pj': ev_envenenado_app.vars.pj}; break;
		case 'daga': v = {'daga': ev_envenenado_app.vars.dt}; break;
		case 'pnj': v = {'pnj': ev_envenenado_app.vars.enemigs.pnj}; break;
		case 'grupo': v = {'grupo': ev_envenenado_app.vars.enemigos.grupos}; break;
		case 'barco': v = {'barco': ev_envenenado_app.vars.enemigos.barcos}; break;
		case 'fortaleza': v = {'fortaleza': ev_envenenado_app.vars.enemigos.fortalezas}; break;
		default: break;
	}
	alert('<?xml version="1.0"?>' + ev_env_toXML(v));
}

function ev_env_toXML (o) {
	var ret = '';
	for (var i in o) {
		ret += '<' + i + '>';
		if (typeof o[i] == 'object') ret += ev_env_toXML(o[i]);
		else ret += o[i];
		ret += '</' + i + '>';
	}
	return ret;
}


function ev_PDF () {
	// create file
	var doc = new jsPDF();
	var img = 'data:image/png;base64,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';
	doc.addImage(img, 'JPEG', 0, 0, 200, 196);
	doc.text(20, 20, 'TEST!');
	doc.text(20, 40, 'ASDFASDFasdfds dsafsd');
	var pdf_file = doc.output();
	//	--------------------------------
/*	var length = pdf_file.length,
	arrBuffer = new Uint8Array(new ArrayBuffer(length));
	for (var i = 0; i < length; i++) arrBuffer[i] = pdf_file.charCodeAt(i);
	// Overwrite the output variable with a blob
	pdf_file = new Blob([arrBuffer], {type: "application/pdf"});
*/	//	--------------------------------
//	console.log(pdf_file);
	var file_name = '';
	var prompt_text = 'nombre para el archivo?';
	while (!file_name.length){
		file_name = prompt(prompt_text);
		console.log('file_name:' + file_name);
		console.log('file_name.length:' + file_name.length);
		if (!file_name || !file_name.length) prompt_text = 'nombre no válido';
	}
	if (file_name) {
		file_name += '.pdf';
		ev_env_saveFile(file_name, pdf_file);
	}
}

function ev_env_PDF (p) {
	var file_name = '';
	var doc = new jsPDF();
	switch (p) {
		case 'pj': file_name = ev_env_pj_pdf(doc); break;
		case 'daga': file_name = ev_env_daga_pdf(doc); break;
		case 'pnj': file_name = ev_env_pnj_pdf(doc); break;
		case 'grupo': file_name = ev_env_grupo_pdf(doc); break;
		case 'barco': file_name = ev_env_barco_pdf(doc); break;
		case 'fortaleza': file_name = ev_env_fortaleza_pdf(doc); break;
		default: break;
	}
	console.dir(doc);
	pdf_file = doc.output();
	if (file_name) ev_env_fileTransfer(file_name, pdf_file);

}

function ev_env_fileTransfer (fileName, file) {
	var assetURL = 'data:application/pdf;base64,' + btoa(file);
	var store = cordova.file.externalRootDirectory + 'download/';
	if (device.platform != 'Android') var store = cordova.file.documentsDirectory;
	window.resolveLocalFileSystemURL(store + fileName, function () {
		alert('El archivo ya existe: ' + store + fileName);
	}, function () {
		var fileTransfer = new FileTransfer();
		fileTransfer.download(assetURL, store + fileName, function (entry) {
			console.log('save \'' + store + fileName + '\' file: success');
			alert('Archivo guardado: ' + store + fileName);
		}, function (err) {
			console.log(err);
		});
	});
}

function ev_env_saveFile (name, file) {
	window.requestFileSystem(
		window.LocalFileSystem.PERSISTENT,
		1024 *1024,
		function (fileSystem) {
			fileSystem.root.getDirectory(
				"download",
				{create: true},
				function (dirEntry) {
					dirEntry.getFile(
						name,
						{create: true, exclusive: true},
						function (fileEntry) {
							fileEntry.createWriter(
								function (writer) {
									writer.write(file);
									var url = fileEntry.toURL();
									console.log(url + ' file creation succes');
									alert('El personaje ha sido guardado en /download/' + name + '.');
								}
							);
						}
					);
				}
			);
		},
		function () {console.log('window.requestFileSystem failed');}
	);
}

function ev_env_saveFile_bak (name, file) {
	window.requestFileSystem(
		window.LocalFileSystem.PERSISTENT,
		1024 *1024,
		function (fileSystem) {
			fileSystem.root.getFile(
				name,
				{create: true},
				function (fileEntry) {
					fileEntry.createWriter(
						function (writer) {
							writer.write(file);
							var url = fileEntry.toURL();
							console.log(url + ' file creation succes');
							alert('Se ha creado el archivo ' + url + '.');
						}
					);
				},
				function () {console.log('fileSystem.root.getFile failed');}
			);
		},
		function () {console.log('window.requestFileSystem failed');}
	);
}


/*
console.clear();
var v = ev_envenenado_app.vars;
console.dir({pj: v.pj});
console.dir({daga: v.dt});
console.dir({pnj: v.enemigos.pnj});
console.dir({grupos: v.enemigos.grupos});
console.dir({barcos: v.enemigos.barcos});
console.dir({fortalezas: v.enemigos.fortalezas});
*/

function ev_env_pj_pdf (doc) {
	var pj = ev_envenenado_app.vars.pj;
	var file_name = 'pj-' + pj.nombre + '.pdf';
	doc.setFontSize(14);
	doc.setFontStyle('normal');
	doc.text(20, 29, 'Mi nombre es'); doc.setFontSize(20); doc.text(52, 29, pj.nombre + '.');
	doc.setFontSize(14);
	doc.setFontStyle('bold');
	doc.text(20, 39, 'Soy un pirata y he aqu\xED mi confesi\xF3n: ');
	doc.setFontStyle('normal');
	var str = 'He servido como Contramaestre';
	if (pj.segundoACargo) str += ', segundo a cargo';
	str += ' en La Daga, bajo el mando del Capit\xE1n Jonathan Pallor, llamado Azufre Jack.';
	doc.text(20, 45, ev_env_strParrafo(str, 70));
	doc.setFontStyle('bold');		doc.text(20, 63, 'Perfil:');
	doc.setFontStyle('normal');		doc.text(35, 63, pj.puntosPerfil.toString());
	doc.setFontStyle('bold');		doc.text(41, 63, 'Temeridad:');
	doc.setFontStyle('normal');		doc.text(69, 63, pj.temeridad.toString());
	doc.setFontStyle('bold');		doc.text(75, 63, 'Brutalidad:');
	doc.setFontStyle('normal');		doc.text(102, 63, pj.brutalidad.toString());
	doc.setFontStyle('bold');		doc.text(108, 63, 'Alma:');
	doc.setFontStyle('normal');		doc.text(123, 63, pj.alma.toString());
	doc.setFontStyle('bold');		doc.text(129, 63, 'Diablo:');
	doc.setFontStyle('normal');		doc.text(147, 63, pj.diablo.toString());
	doc.setFontStyle('bold');		doc.text(153, 63, 'Ambici\xF3n:');
	doc.setFontStyle('normal');		doc.text(178, 63, pj.ambicion.toString());
	// pecados
	doc.setFontStyle('bold');		doc.text(20, 76, 'He pecado...');
	var names = {
		'adulterio': 'adulterio',
		'asesinato': 'asesinato',
		'blasfemia': 'blasfemia',
		'idolatria': 'idolatr\xEDa',
		'motin': 'mot\xEDn',
		'robo': 'robo',
		'sodomia': 'sodom\xEDa',
		'violacion': 'violaci\xF3n'
	};
	var resArray = [];
	for (var i in pj.pecados) if (pj.pecados[i] != 0) resArray.push(names[i]);
	doc.setFontStyle('normal');		doc.text(20, 83, ev_env_arrayToString(resArray));
	// infortunios
	doc.setFontStyle('bold');		doc.text(20, 101, 'He sufrido infortunios...');
	names = {
		'arrestado': 'arrestado',
		'condenado': 'condenado',
		'encarcelado': 'encarcelado',
		'intentodeasesinato': 'intento de asesinato',
		'latigazos': 'latigazos',
		'maldito': 'maldito',
		'marcado': 'marcado',
		'mutilado': 'mutilado',
		'paliza': 'paliza',
		'repudiado': 'repudiado',
		'reclutadoalafuerza': 'reclutado a la fuerza',
		'torturado': 'torturado',
		'violado': 'violado'
	};
	resArray = [];
	for (var i in pj.infortunios) if (pj.infortunios[i] > 0) {
		var str = names[i];
		if (pj.infortunios[i] == 2) str += ' (X)';
		resArray.push(str);
	}
	doc.setFontStyle('normal');		doc.text(20, 108, ev_env_arrayToString(resArray));
	// XXX
	doc.text(20, 129, pj.xxx);
	// ambiciones
	doc.setFontStyle('bold');		doc.text(20, 141, 'Ambiciono...');
	names = {
		'sercapitan': 'ser capit\xE1n',
		'tenertierras': 'tener tierras',
		'serperdonado': 'ser perdonado',
		'vivirparasiempre': 'vivir para siempre',
		'serrecordadoparasiempre': 'ser recordado para siempre',
		'seradmiradoporlasociedad': 'ser admirado por la sociedad',
		'vengarsedealguien': 'vengarme de alguien',
		'vengarsedealguiendemejorposicion': 'vengarme de alguien de mejor posici\xF3n',
		'fornicarconelpiratadeotrojugador': 'fornicar con el pirata de otro jugador',
		'fornicarconhijaohijodealguiendemejorposicion': 'fornicar con hija o hijo de alguien de mejor posici\xF3n',
		'escupiralacaradedios': 'escupir a la cara de dios',
		'escupiralacaradeldiablo': 'escupir a la cara del diablo'
	};
	resArray = [];
	for (var i in pj.ambiciones) if (pj.ambiciones[i]) resArray.push(names[i]);
	if (!resArray.length) resArray.push('Nada');
	doc.setFontStyle('normal');		doc.text(20, 148, ev_env_arrayToString(resArray));
	// perfil
	doc.setFontStyle('bold');		doc.text(20, 185, 'Y voy armado con...');
	resArray = [];
	for (var i in pj.perfil) {
		if ('boolean' == typeof(pj.perfil[i])) if (pj.perfil[i]) resArray.push(i);
		if ('string' == typeof(pj.perfil[i])) if ('' != pj.perfil[i]) resArray.push(pj.perfil[i]);
	}
	if (!resArray.length) resArray.push('Nada');
	doc.setFontStyle('normal');		doc.text(20, 192, ev_env_arrayToString(resArray));
	return file_name;
}

function ev_env_daga_pdf (doc) {
	var dt = ev_envenenado_app.vars.dt;
	var file_name = 'la-daga.pdf';
	doc.setFontSize(16);
	doc.setFontStyle('bold');
	doc.text(20, 29, 'La Daga.');
	doc.setFontSize(14);
	doc.setFontStyle('normal');
	var daga = 'La Daga es un balandro de tipo bermuda, con dos m\xE1stiles. Por defecto tiene 16 ca\xF1ones de 4 y 6 libras y una tripulaci\xF3n de 80 hombres.';
	doc.text(20, 39, ev_env_strParrafo(daga, 70));
	var resArray = [];
	if (dt.daga.select1) resArray.push(dt.daga.select1);
	if (dt.daga.select2) resArray.push(dt.daga.select2);
	if (resArray.length) doc.text(20, 54, ev_env_arrayToString(resArray));
	doc.setFontStyle('bold');		doc.text(20, 66, 'Perfil del barco:');
	doc.setFontStyle('normal');		doc.text(58, 66, dt.daga.perfil.toString());
	if (dt.daga.puntoFuerte.length) {
		var puntoFuerte = 'El punto fuerte de La Daga es ' + dt.daga.puntoFuerte + '.';
		doc.text(20, 76, ev_env_strParrafo(puntoFuerte, 70));
	}
	doc.setFontSize(16);
	doc.setFontStyle('bold');
	doc.text(20, 95, 'La Daga. Tripulaci\xF3n.');
	doc.setFontSize(14);
	doc.setFontStyle('normal');
	// dt.tripulacion.select1 + .select2
	resArray = [];
	if (dt.tripulacion.select1) resArray.push(dt.tripulacion.select1);
	if (dt.tripulacion.select2) resArray.push(dt.tripulacion.select2);
	if (resArray.length) doc.text(20, 105, ev_env_arrayToString(resArray));
	// .select3
	if (dt.tripulacion.select3) {
		var select3Str = 'Adem\xE1s ' + dt.tripulacion.select3 + '.';
		doc.text(20, 120, ev_env_strParrafo(select3Str, 70));
	}
	// .perfil
	doc.setFontStyle('bold');		doc.text(20, 135, 'Perfil de la tripulaci\xF3n:');
	doc.setFontStyle('normal');		doc.text(74, 135, dt.tripulacion.perfil.toString());
	return file_name;
}

function ev_env_pnj_pdf (doc) {
	var pnj = ev_envenenado_app.vars.enemigos.pnj;
	var file_name = 'pnj-' + pnj.nombre + '.pdf';
	doc.setFontSize(14);
	doc.setFontStyle('bold');		doc.text(20, 29, 'Nombre:');
	doc.setFontStyle('normal');		doc.text(42, 29, pnj.nombre);
	doc.setFontStyle('bold');		doc.text(20, 39, 'Cargo:');
	doc.setFontStyle('normal');		doc.text(38, 39, pnj.cargo);
	var resArray = [];
	if (pnj.perfil1) resArray.push(pnj.perfil1);
	if (pnj.perfil2) resArray.push(pnj.perfil2);
	if (pnj.perfil3) resArray.push(pnj.perfil3);
	if (resArray.length) doc.text(20, 49, ev_env_arrayToString(resArray));
	doc.setFontStyle('bold');		doc.text(20, 69, 'Temeridad:');
	doc.setFontStyle('normal');		doc.text(48, 69, pnj.temeridad.toString());
	doc.setFontStyle('bold');		doc.text(20, 79, 'Perfil:');
	doc.setFontStyle('normal');		doc.text(35, 79, pnj.perfil.toString());
	resArray = [];
	if (pnj.debil) resArray.push('d\xE9bil');
	if (pnj.discapacidad) resArray.push(pnj.discapacidad);
	if (resArray.length) doc.text(20, 89, 'Es ' + ev_env_arrayToString(resArray, false));
	return file_name;
}

function ev_env_grupo_pdf (doc) {
	var grupos = ev_envenenado_app.vars.enemigos.grupos;
	var file_name = 'grupo-' + grupos.nombre + '.pdf';
	doc.setFontSize(20);
	doc.text(20, 29, grupos.nombre);
	doc.setFontSize(14);
	var resArray = [];
	if (grupos.select1) resArray.push(grupos.select1);
	if (grupos.select2) resArray.push(grupos.select2);
	if (grupos.select3) resArray.push(grupos.select3);
	if (grupos.select4) resArray.push(grupos.select4);
	if (grupos.select5) resArray.push(grupos.select5);
	if (grupos.select6) resArray.push(grupos.select6);
	if (resArray.length) doc.text(20, 39, ev_env_arrayToString(resArray)); 
	doc.setFontStyle('bold');		doc.text(20, 84, 'Perfil:');
	doc.setFontStyle('normal');		doc.text(35, 84, grupos.perfil.toString());
	return file_name;
}

function ev_env_barco_pdf (doc) {
	var barcos = ev_envenenado_app.vars.enemigos.barcos;
	var file_name = 'barco-' + barcos.nombre + '.pdf';
	doc.setFontSize(20);
	doc.text(20, 29, barcos.nombre);
	doc.setFontSize(14);
	var tiposBarcos = {
		'balandroMercante': 'balandro mercante',
		'balandroGuerra': 'balandro de guerra',
		'barcoMercante': 'barco mercante',
		'barcoGuerra': 'barco de guerra',
		'navioLineaArmadaMercante': 'nav\xEDo; de l\xEDnea de la armada mercante',
		'navioLineaArmadaGuerra': 'nav\xEDo; de l\xEDnea de la armada de guerra'
	};
	var str = 'Es un ' + tiposBarcos[barcos.tipo] + ' de ' + barcos.mastiles + ' m\xE1stiles y de ' + barcos.canones + ' ca\xF1ones.';
	doc.text(20, 39, ev_env_strParrafo(str, 70));
	var checkbox = {
		'tieneunamacabrareputacion' : 'tiene una macabra reputaci\xF3n',
		'esimponente' : 'es imponente',
		'esafortunada' : 'es afortunada',
		'esdesolidamanufactura' : 'es de s\xF3lida manifactura',
		'esrapida' : 'es r\xE1pida',
		'estafuertementearmada' : 'est\xE1 fuertemente armada',
		'esmaniobrable' : 'es maniobrable',
		'estasobrecargada': 'est\xE1 sobrecargada',
		'esfragil': 'es fr\xE1gil',
		'tienefugas': 'tiene fugas',
		'estapobrementearmada': 'est\xE1 pobremente armada',
		'estavieja': 'est\xE1 vieja',
		'lefaltatripulacion': 'le falta tripulaci\xF3n',
		'eslenta': 'es lenta'
	};
	var resArray = [];
	for (var i in barcos.cbGrupo1) if (barcos.cbGrupo1[i]) resArray.push(checkbox[i]);
	for (var i in barcos.cbGrupo2) if (barcos.cbGrupo2[i]) resArray.push(checkbox[i]);
	if (resArray.length) doc.text(20, 54, ev_env_arrayToString(resArray));
	doc.setFontStyle('bold');		doc.text(20, 69, 'Perfil:');
	doc.setFontStyle('normal');		doc.text(35, 69, barcos.perfil.toString());
	//
	return file_name;
}

function ev_env_fortaleza_pdf (doc) {
	var fortalezas = ev_envenenado_app.vars.enemigos.fortalezas;
	var file_name = 'fortaleza-' + fortalezas.nombre + '.pdf';
	doc.setFontSize(20);
	doc.text(20, 29, fortalezas.nombre);
	doc.setFontSize(14);
	var checkbox = {
		'tieneunabuenaposicion': 'tiene una buena posici\xF3n',
		'tieneunamacabrareputacion': 'tiene una macabra reputaci\xF3n',
		'esdesolidaconstruccion': 'es de s\xF3lida construcci\xF3n',
		'estafuertementearmada': 'est\xE1 fuertemente armada',
		'esimponente': 'es imponente',
		'essolodemaderayladrillosinpiedra': 'es s\xF3lo de madera y ladrillo, sin piedra',
		'esaccesibledesdecualquierlado': 'es accesible desde cualquier lado',
		'estapobrementearmada': 'est\xE1 pobremente armada',
		'estavieja': 'est\xE1 vieja',
		'lefaltanhombres': 'le faltan hombres'
	};
	var resArray = [];
	for (var i in fortalezas.cbGrupo1) if (fortalezas.cbGrupo1[i]) resArray.push(checkbox[i]);
	for (var i in fortalezas.cbGrupo2) if (fortalezas.cbGrupo2[i]) resArray.push(checkbox[i]);
	if (resArray.length) doc.text(20, 39, ev_env_arrayToString(resArray));
	doc.setFontStyle('bold');		doc.text(20, 59, 'Perfil:');
	doc.setFontStyle('normal');		doc.text(35, 59, fortalezas.perfil.toString());
	//
	return file_name;
}




//	--------------------------------

function ev_env_openLink (url) {
	console.log('Abriendo el enlace: ' + url);
	var ref = window.open(url, '_system', 'location=yes');
}


//
function ev_env_panelButton (id) {
	$('#ev-main-panel').panel('close');
	setTimeout(function () {
		$(':mobile-pagecontainer').pagecontainer('change', '#'+id, {transition: 'none'});
	}, 192);
}




//	--------------------------------

function ev_env_textInput (formElm, valueVar, resElm, funct) {
	var defaultValue = null;
	switch (valueVar.length) {
		case 1: defaultValue = ev_envenenado_app.vars[valueVar[0]]; break;
		case 2: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]]; break;
		case 3: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]]; break;
		case 4: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]][valueVar[3]]; break;
		default: break;
	}
	if (defaultValue != 'undefined') {
		formElm.value = defaultValue;
		resElm.innerHTML = defaultValue;
	}
	if ('undefined' == typeof(funct)) {
		formElm.addEventListener('change', function () {
			switch (valueVar.length) {
				case 1: ev_envenenado_app.vars[valueVar[0]] = this.value; break;
				case 2: ev_envenenado_app.vars[valueVar[0]][valueVar[1]] = this.value; break;
				case 3: ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]] = this.value; break;
				case 4: ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]][valueVar[3]] = this.value; break;
				default: break;
			}
			resElm.innerHTML = this.value;
		}, false);
	}
	else formElm.addEventListener('change', funct, false);
}


function ev_env_segundoACargo () {
	elmRes = document.getElementById('ev-pj-resultado-segundoacargo');
	var resStr = '';
	if (ev_envenenado_app.vars.pj.segundoACargo) resStr = ', segundo a cargo';
	elmRes.innerHTML = resStr;
}


function ev_env_doubleCheckboxPecados (p) {
	var doubleCheckbox = document.getElementById('ev-pj-form-pecados-' + p);

	doubleCheckbox.addEventListener('click', function () {
		ev_envenenado_app.vars.pj.pecados[p]++;
		ev_env_pecadosResult();
		if (3 == ev_envenenado_app.vars.pj.pecados[p]) ev_envenenado_app.vars.pj.pecados[p] = 0;
		this.className = 'ev-double-checkbox ev-double-checkbox-pecados-' + ev_envenenado_app.vars.pj.pecados[p];
		ev_env_diabloAlma();
		ev_env_temeridad();
	}, false);
}

function ev_env_pecadosResult () {
	var names = {
		'adulterio': 'adulterio',
		'asesinato': 'asesinato',
		'blasfemia': 'blasfemia',
		'idolatria': 'idolatr&iacute;a',
		'motin': 'mot&iacute;n',
		'robo': 'robo',
		'sodomia': 'sodom&iacute;a',
		'violacion': 'violaci&oacute;n'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.pecados) if (ev_envenenado_app.vars.pj.pecados[i] != 0) resArray.push(names[i]);
	if (!resArray.length) resArray.push('Ninguno');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-pecados'));
}


function ev_env_diabloAlma () {
	ev_envenenado_app.vars.pj.diablo = 0;
	for (var i in ev_envenenado_app.vars.pj.pecados) if (ev_envenenado_app.vars.pj.pecados[i] > 0) ev_envenenado_app.vars.pj.diablo++;
	if (ev_envenenado_app.vars.pj.diablo < 2) ev_envenenado_app.vars.pj.diablo = 2;
	if (ev_envenenado_app.vars.pj.diablo > 6) ev_envenenado_app.vars.pj.diablo = 6;
	var divResDiablo = document.getElementById('ev-pj-resultado-diablo');
	divResDiablo.innerHTML = ev_envenenado_app.vars.pj.diablo;
	ev_envenenado_app.vars.pj.alma = 8;
	ev_envenenado_app.vars.pj.alma -= ev_envenenado_app.vars.pj.diablo;
	var divResAlma = document.getElementById('ev-pj-resultado-alma');
	divResAlma.innerHTML = ev_envenenado_app.vars.pj.alma;
}


function ev_env_doubleCheckboxInfortunios (i) {
	var doubleCheckbox = document.getElementById('ev-pj-form-infortunios-' + i);

	doubleCheckbox.addEventListener('click', function () {
		ev_envenenado_app.vars.pj.infortunios[i]++;
		ev_env_infortuniosResult();
		if (3 == ev_envenenado_app.vars.pj.infortunios[i]) ev_envenenado_app.vars.pj.infortunios[i] = 0;
		this.className = 'ev-double-checkbox ev-double-checkbox-infortunios-' + ev_envenenado_app.vars.pj.infortunios[i];
		ev_env_brutalidad();
		ev_env_temeridad();
		ev_env_displayMutilacion();
	}, false);
}

function ev_env_infortuniosResult () {
	var names = {
		'arrestado': 'arrestado',
		'condenado': 'condenado',
		'encarcelado': 'encarcelado',
		'intentodeasesinato': 'intento de asesinato',
		'latigazos': 'latigazos',
		'maldito': 'maldito',
		'marcado': 'marcado',
		'mutilado': 'mutilado',
		'paliza': 'paliza',
		'repudiado': 'repudiado',
		'reclutadoalafuerza': 'reclutado a la fuerza',
		'torturado': 'torturado',
		'violado': 'violado'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.infortunios) {
		if (ev_envenenado_app.vars.pj.infortunios[i] != 0) {
			if (1 == ev_envenenado_app.vars.pj.infortunios[i]) resArray.push(names[i]);
			if (2 == ev_envenenado_app.vars.pj.infortunios[i]) resArray.push(names[i] + ' (X)');
		}
	}
	if (!resArray.length) resArray.push('Ninguno');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-infortunios'));
}


function ev_env_brutalidad () {
	ev_envenenado_app.vars.pj.brutalidad = 0;
	ev_envenenado_app.vars.pj.xxx = '';
	for (var i in ev_envenenado_app.vars.pj.infortunios) if (ev_envenenado_app.vars.pj.infortunios[i] > 0) {
		ev_envenenado_app.vars.pj.brutalidad++;
		if (2 == ev_envenenado_app.vars.pj.infortunios[i]) ev_envenenado_app.vars.pj.xxx += 'X';
	}
	if (ev_envenenado_app.vars.pj.brutalidad < 2) ev_envenenado_app.vars.pj.brutalidad = 2;
	if (ev_envenenado_app.vars.pj.brutalidad > 6) ev_envenenado_app.vars.pj.brutalidad = 6;
	var divResBrutalidad = document.getElementById('ev-pj-resultado-brutalidad');
	divResBrutalidad.innerHTML = ev_envenenado_app.vars.pj.brutalidad;
	var divResXXX = document.getElementById('ev-pj-resultado-xxx');
	divResXXX.innerHTML = ev_envenenado_app.vars.pj.xxx;
}


function ev_env_checkboxAmbiciones (a) {
	var id = '#ev-pj-form-ambiciones-' + a;
	var divForm = $(id);
	var divResult = document.getElementById('ev-pj-resultado-ambiciones-' + a);
	var value = divForm[0].value;
	divForm.checkboxradio();
	if (ev_envenenado_app.vars.pj.ambiciones[a]) divForm.prop('checked', true).checkboxradio('refresh');
	else divForm.prop('checked', false).checkboxradio('refresh');
	divForm.change(function () {
		if (this.checked) {
			ev_envenenado_app.vars.pj.ambiciones[a] = true;
			divForm.prop('checked', true).checkboxradio('refresh');
			ev_env_ambicionesResult();
		}
		else {
			ev_envenenado_app.vars.pj.ambiciones[a] = false;
			divForm.prop('checked', false).checkboxradio('refresh');
			ev_env_ambicionesResult();
		}
		ev_env_ambicion();
		ev_env_temeridad();
	});
}

function ev_env_ambicionesResult () {
	var names = {
		'sercapitan': 'ser capit&aacute;n',
		'tenertierras': 'tener tierras',
		'serperdonado': 'ser perdonado',
		'vivirparasiempre': 'vivir para siempre',
		'serrecordadoparasiempre': 'ser recordado para siempre',
		'seradmiradoporlasociedad': 'ser admirado por la sociedad',
		'vengarsedealguien': 'vengarme de alguien',
		'vengarsedealguiendemejorposicion': 'vengarme de alguien de mejor posici&oacute;n',
		'fornicarconelpiratadeotrojugador': 'fornicar con el pirata de otro jugador',
		'fornicarconhijaohijodealguiendemejorposicion': 'fornicar con hija o hijo de alguien de mejor posici&oacute;n',
		'escupiralacaradedios': 'escupir a la cara de dios',
		'escupiralacaradeldiablo': 'escupir a la cara del diablo'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.ambiciones) if (ev_envenenado_app.vars.pj.ambiciones[i]) resArray.push(names[i]);
	if (!resArray.length) resArray.push('Ninguna');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-ambiciones'));
}


function ev_env_ambicion () {
	ev_envenenado_app.vars.pj.ambicion = 0;
	for (var i in ev_envenenado_app.vars.pj.ambiciones) if (ev_envenenado_app.vars.pj.ambiciones[i]) ev_envenenado_app.vars.pj.ambicion++;
	if (ev_envenenado_app.vars.pj.ambicion < 2) ev_envenenado_app.vars.pj.ambicion = 2;
	if (ev_envenenado_app.vars.pj.ambicion > 6) ev_envenenado_app.vars.pj.ambicion = 6;
	document.getElementById('ev-pj-resultado-ambicion').innerHTML = ev_envenenado_app.vars.pj.ambicion;
}


function ev_env_temeridad () {
	ev_envenenado_app.vars.pj.temeridad = 0;
	ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.alma;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.diablo) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.diablo;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.brutalidad) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.brutalidad;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.ambicion) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.ambicion;
	document.getElementById('ev-pj-resultado-temeridad').innerHTML = ev_envenenado_app.vars.pj.temeridad;
}


function ev_env_perfilCheckbox (p) {
	var id = '#ev-pj-form-perfil-' + p;
	var divForm = $(id);
	var value = divForm[0].value;
	divForm.checkboxradio();
	if (ev_envenenado_app.vars.pj.perfil[p]) {
		divForm.prop('checked', true).checkboxradio('refresh');
		ev_env_perfilResult();
	}
	else divForm.prop('checked', false).checkboxradio('refresh');
	if (ev_envenenado_app.vars.pj.perfil[p]) ;
	divForm.change(function () {
		if (this.checked) {
			ev_envenenado_app.vars.pj.perfil[p] = true;
			divForm.prop('checked', true).checkboxradio('refresh');
		}
		else {
			ev_envenenado_app.vars.pj.perfil[p] = false;
			divForm.prop('checked', false).checkboxradio('refresh');
		}
		ev_env_perfilResult();
		ev_env_perfil();
	});
}


function ev_env_perfilSelect (ps) {
	var select = document.getElementsByName('ev-pj-form-perfil-' + ps)[0];
	if (ev_envenenado_app.vars.pj.perfil[ps]) {
		select.value = ev_envenenado_app.vars.pj.perfil[ps];
		$('select[name="ev-pj-form-perfil-'+ps+'"]').selectmenu();
		$('select[name="ev-pj-form-perfil-'+ps+'"]').selectmenu('refresh', true);
	}
	else ev_envenenado_app.vars.pj.perfil[ps] = select.value;
	select.addEventListener('change', function () {
		ev_envenenado_app.vars.pj.perfil[ps] = this.value;
		ev_env_perfilResult();
		ev_env_perfil();
	}, false);
}

function ev_env_perfilResult () {
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.perfil) {
		if ('boolean' == typeof(ev_envenenado_app.vars.pj.perfil[i])) if (ev_envenenado_app.vars.pj.perfil[i]) resArray.push(i);
		if ('string' == typeof(ev_envenenado_app.vars.pj.perfil[i])) if ('' != ev_envenenado_app.vars.pj.perfil[i]) resArray.push(ev_envenenado_app.vars.pj.perfil[i]);
	}
	if (!resArray.length) resArray.push('Nada');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-perfil'));
}


function ev_env_perfil () {
	ev_envenenado_app.vars.pj.puntosPerfil = 2;
	for (var i in ev_envenenado_app.vars.pj.perfil) if (ev_envenenado_app.vars.pj.perfil[i]) ev_envenenado_app.vars.pj.puntosPerfil++;
	document.getElementById('ev-pj-resultado-perfil-puntosperfil').innerHTML = ev_envenenado_app.vars.pj.puntosPerfil;
}


function ev_env_displayMutilacion () {
	var div = document.getElementById('ev-pj-div-mutilacion');
	if (ev_envenenado_app.vars.pj.infortunios.mutilado > 0) div.style.display = 'block';
	else div.style.display = 'none';
}




// DAGA Y TRIPULAC.
function ev_env_dagaPerfil () {
	var resArray = [];
	var perfil = 8;
	if (ev_envenenado_app.vars.dt.daga.select1) { perfil++; resArray.push(ev_envenenado_app.vars.dt.daga.select1); }
	if (ev_envenenado_app.vars.dt.daga.select2) { perfil++; resArray.push(ev_envenenado_app.vars.dt.daga.select2); }
	ev_envenenado_app.vars.dt.daga.perfil = perfil;
	document.getElementById('ev-dt-daga-resultado-perfildelbarco').innerHTML = perfil;
	var divDagaResultado = document.getElementById('ev-dt-daga-resultado');
	if (resArray.length) ev_env_showArray(resArray, divDagaResultado);
	else divDagaResultado.innerHTML = '';
	//
	var str2 = '';
	if (ev_envenenado_app.vars.dt.daga.puntoFuerte) str2 = 'El punto fuerte de La Daga es ' + ev_envenenado_app.vars.dt.daga.puntoFuerte + '.'; 
	document.getElementById('ev-dt-daga-resultado-puntofuerte').innerHTML = str2;
}


function ev_env_tripulacionPerfil () {
	var resArray = [];
	var perfil = 5;
	var str = '';
	var str2 = '';
	if (ev_envenenado_app.vars.dt.tripulacion.select1) { perfil++; resArray.push(ev_envenenado_app.vars.dt.tripulacion.select1); }
	if (ev_envenenado_app.vars.dt.tripulacion.select2) { perfil++; resArray.push(ev_envenenado_app.vars.dt.tripulacion.select2); }
	if (ev_envenenado_app.vars.dt.tripulacion.select3) { perfil--; str2 = 'Adem&aacute;s ' + ev_envenenado_app.vars.dt.tripulacion.select3 + '.'; }
	ev_envenenado_app.vars.dt.tripulacion.perfil = perfil;
	var divTripulacionResultado = document.getElementById('ev-dt-tripulacion-resultado');
	if (resArray.length) ev_env_showArray(resArray, divTripulacionResultado);
	else divTripulacionResultado.innerHTML = '';
	document.getElementById('ev-dt-tripulacion-resultado-select3').innerHTML = str2;
	document.getElementById('ev-dt-daga-resultado-perfildelatripulacion').innerHTML = perfil;
}




// ENEMIGOS
function ev_env_enemigosPnjTemeridad () {
	var elm = document.getElementById('ev-enemigos-pnj-resultado-temeridad');
	ev_envenenado_app.vars.enemigos.pnj.temeridad = ev_envenenado_app.vars.enemigos.pnj['dado'+ev_envenenado_app.vars.enemigos.pnj.dadoElegido];
	elm.innerHTML = ev_envenenado_app.vars.enemigos.pnj.temeridad;
}


function ev_env_enemigosPnj () {
	var resArray = [];
	var perfil = 2;
	if (ev_envenenado_app.vars.enemigos.pnj.perfil1) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil1); }
	if (ev_envenenado_app.vars.enemigos.pnj.perfil2) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil2); }
	if (ev_envenenado_app.vars.enemigos.pnj.perfil3) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil3); }
	ev_envenenado_app.vars.enemigos.pnj.perfil = perfil;
	document.getElementById('ev-enemigos-pnj-resultado-perfil').innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-pnj-resultado-str'));
}


function ev_env_enemigosPnjDebil () {
	var str = '';
	if (ev_envenenado_app.vars.enemigos.pnj.debil) {
		str = 'es d&eacute;bil';
		if (ev_envenenado_app.vars.enemigos.pnj.discapacidad) str += ' y ';
	}
	if (ev_envenenado_app.vars.enemigos.pnj.discapacidad != '') str += ev_envenenado_app.vars.enemigos.pnj.discapacidad;
	if (str.length > 0) str = ev_env_capitalizeFirstLetter(str) + '.';
	document.getElementById('ev-enemigos-pnj-resultado-debil-discapacidad').innerHTML = str;
}


function ev_env_enemigosGrupos () {
	var resArray = [];
	var perfil = 5;
	if (ev_envenenado_app.vars.enemigos.grupos.select1) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select1); }
	if (ev_envenenado_app.vars.enemigos.grupos.select2) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select2); }
	if (ev_envenenado_app.vars.enemigos.grupos.select3) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select3); }
	if (ev_envenenado_app.vars.enemigos.grupos.select4) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select4); }
	if (ev_envenenado_app.vars.enemigos.grupos.select5) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select5); }
	if (ev_envenenado_app.vars.enemigos.grupos.select6) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select6); }
	ev_envenenado_app.vars.enemigos.grupos.perfil = perfil;
	document.getElementById('ev-enemigos-grupos-resultado-perfil').innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-grupos-resultado-str'));
}


function ev_env_enemigosBarcos (valueVar) {
	var tipo = ev_envenenado_app.ev_env_barcosTipos[valueVar];
	ev_envenenado_app.vars.enemigos.barcos.mastiles		= tipo.m;
	ev_envenenado_app.vars.enemigos.barcos.canones		= tipo.c;
	ev_envenenado_app.vars.enemigos.barcos.max1			= tipo.m1;
	ev_envenenado_app.vars.enemigos.barcos.max2			= tipo.m2;
	ev_envenenado_app.vars.enemigos.barcos.defPerfil	= tipo.dp;
	//
	var elmMax1 = document.getElementById('ev-enemibos-barcos-resultado-max1');
	var elmMax2 = document.getElementById('ev-enemibos-barcos-resultado-max2');
	elmMax1.innerHTML = tipo.m1;
	elmMax2.innerHTML = tipo.m2;
	var str1 = 'Es un ' + tipo.n + ' de ' + tipo.m + ' m&aacute;stiles y ' + tipo.c + ' ca&ntilde;ones.';
	var elmRes1 = document.getElementById('ev-enemigos-barcos-resultado-1');
	elmRes1.innerHTML = str1;
	ev_env_enemigosBarcosCheckboxResult();
}

function ev_env_enemigosBarcosCheckboxList (list, n) {
	for (var i = 0; i < list.length; i++) ev_env_enemigosBarcosCheckbox(list[i], n);
		ev_env_enemigosBarcosCheckboxMax(n);
}
function ev_env_enemigosBarcosCheckbox (cbId, n) {
	var formElm = $('#ev-enemigos-barcos-form-' + cbId);
	formElm.checkboxradio();
	if (ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][cbId])
		formElm.prop('checked', true).checkboxradio('refresh');
	else formElm.prop('checked', false).checkboxradio('refresh');
	formElm.change(function () {
		ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][cbId] = this.checked;
		formElm.prop('checked', this.checked).checkboxradio('refresh');
		ev_env_enemigosBarcosCheckboxMax(n);
		ev_env_enemigosBarcosCheckboxResult();
	});
}
function ev_env_enemigosBarcosCheckboxReset () {
	var disable = false;
	if (ev_envenenado_app.vars.enemigos.barcos.max1 == 0) disable = true;
	for (var i in ev_envenenado_app.vars.enemigos.barcos.cbGrupo1) {
		ev_envenenado_app.vars.enemigos.barcos.cbGrupo1[i] = false;
		var cb = $('#ev-enemigos-barcos-form-' + i);
		cb.prop('checked', false).checkboxradio('refresh');
		cb.prop('disabled', disable);
		cb.checkboxradio('refresh');
	}
	if (ev_envenenado_app.vars.enemigos.barcos.max2 == 0) disable = true;
	for (var i in ev_envenenado_app.vars.enemigos.barcos.cbGrupo2) {
		ev_envenenado_app.vars.enemigos.barcos.cbGrupo2[i] = false;
		var cb = $('#ev-enemigos-barcos-form-' + i);
		cb.prop('checked', false).checkboxradio('refresh');
		cb.prop('disabled', disable);
		cb.checkboxradio('refresh');
	}
}
function ev_env_enemigosBarcosCheckboxMax (n) {
	var max = ev_envenenado_app.vars.enemigos.barcos['max'+n];
	var count = 0;
	for (var i in ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n]) if (ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][i]) count++;
	var disable = (count > (max -1));
	for (var i in ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n])
		if (!ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][i])
			$('#ev-enemigos-barcos-form-' + i).prop('disabled', disable).checkboxradio('refresh');
}
function ev_env_enemigosBarcosCheckboxResult () {
	var resArray = [];
	var perfil = ev_envenenado_app.vars.enemigos.barcos.defPerfil;
	var obj = ev_envenenado_app.vars.enemigos.barcos;
	for (var i in obj.cbGrupo1) {
		if (resArray.length < obj.max1 && obj.cbGrupo1[i]) {
			resArray.push($('#ev-enemigos-barcos-form-'+i)[0].value);
			perfil++;
		}
	}
	var arrayMax = resArray.length + obj.max2;
	for (var i in obj.cbGrupo2) {
		if (resArray.length < arrayMax && obj.cbGrupo2[i]) {
			resArray.push($('#ev-enemigos-barcos-form-'+i)[0].value);
			perfil--;
		}
	}
	ev_envenenado_app.vars.enemigos.barcos.perfil = perfil;
	var elmResPerfil = document.getElementById('ev-enemigos-barcos-resultado-perfil');
	elmResPerfil.innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-barcos-resultado-2'));
}


function ev_env_fortalezasCheckboxList (list, n, max) {
	for (var i = 0; i < list.length; i++) ev_env_fortalezasCheckbox(list[i], n, max);
	//check max
	ev_env_fortalezasCheckboxMax(n, max);
}
function ev_env_fortalezasCheckbox (cbId, n, max) {
	var formElm = $('#ev-enemigos-fortalezas-form-' + cbId);
	formElm.checkboxradio();
	if (ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId])
		formElm.prop('checked', true).checkboxradio('refresh');
	else formElm.prop('checked', false).checkboxradio('refresh');
	formElm.change(function () {
		if (this.checked) ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId] = true;
		else ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId] = false;
		formElm.prop('checked', this.checked).checkboxradio('refresh');
		ev_env_fortalezasCheckboxResult();
		ev_env_fortalezasCheckboxMax(n, max);
	});
}
function ev_env_fortalezasCheckboxMax (n, max) {
	var count = 0;
	for (var i in ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n]) if (ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][i]) count++;
	for (var i in ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n])
		if (!ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][i]) {
			var dis = (count >= max)
			var cb = document.getElementById('ev-enemigos-fortalezas-form-'+i);
			cb.disabled = dis;
			if (dis) cb.previousSibling.style.opacity = '0.4';
			else cb.previousSibling.style.opacity = '1.0';
		}
}
function ev_env_fortalezasCheckboxResult () {
	var resArray = [];
	var perfil = 12;
	var obj = ev_envenenado_app.vars.enemigos.fortalezas;
	for (var i in obj.cbGrupo1) {
		if (obj.cbGrupo1[i]) {
			resArray.push($('#ev-enemigos-fortalezas-form-'+i)[0].value);
			perfil++;
		}
	}
	for (var i in obj.cbGrupo2) {
		if (obj.cbGrupo2[i]) {
			resArray.push($('#ev-enemigos-fortalezas-form-'+i)[0].value);
			perfil--;
		}
	}
	ev_envenenado_app.vars.enemigos.fortalezas.perfil = perfil;
	var elmResPerfil = document.getElementById('ev-enemigos-fortalezas-resultado-perfil');
	elmResPerfil.innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-fortalezas-resultado-str'));
}


function ev_env_showArray (array, elm) {
	var str = '<ul>';
	for (var i = 0; i < array.length; i++) str += '<li>' + ev_env_capitalizeFirstLetter(array[i]) + '.</li>';
	str += '</ul>';
	elm.innerHTML = str;
}








//	--------------------------------

function ev_env_capitalizeFirstLetter (str) {
	return (str.charAt(0).toUpperCase() + str.substring(1))
}

function ev_env_shuffle_array (array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function ev_env_arrayToString(array, cap) {
	if (!array.length) array.push('ninguno');
	if (typeof cap == 'boolean') { if (cap) array[0] = ev_env_capitalizeFirstLetter(array[0]); }
	else array[0] = ev_env_capitalizeFirstLetter(array[0]);
	var str = array.join(', ') + '.';
	var lastComma = str.lastIndexOf(',');
	if (lastComma > -1) {
		var y = 'y';
		if (str[lastComma +2] == 'i') y = 'e';
		str = str.slice(0, lastComma) + ' ' + y + str.slice(lastComma +1);
		var maxLineLength = 70;
		return ev_env_strParrafo(str, maxLineLength);
	}
	else return str;
}

function ev_env_strParrafo (str, maxLineLength) {
	var str1 = null;
	var str2 = null;
	if (str.length > maxLineLength) {
		str1 = str.slice(0, maxLineLength);
		str2 = str.slice(maxLineLength);
		var lastSpace = str1.lastIndexOf(' ');
		if (lastSpace != -1) str1 = str1.slice(0, lastSpace +1).concat('\n'.concat(str1.slice(lastSpace +1)));
		str2 = ev_env_strParrafo(str2, maxLineLength);
		return str1.concat(str2);
	}
	else return str;
}

function createXML () {
	var doc = document.createElement('div');
	var mainNode = document.createElement('mainNode');
	mainNode.appendChild(document.createElement('subNode'));
	mainNode.appendChild(document.createElement('subNode'));
	mainNode.appendChild(document.createElement('subNode'));
	doc.appendChild(mainNode);

	alert('<?xml version="1.0"?>' + doc.innerHTML);
}
