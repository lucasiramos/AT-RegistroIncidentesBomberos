export const DataMisSiniestrosEnCurso = [
    {
        "FechaSiniestro": "11/05/2024",
        "Conductor": "Andres Gimenez",
        "Vehiculo": "Mitsubishi Montero Sport 2.4",
        "TipoSiniestro": "Choque",
        "DaniosTerceros": true,
        "Estado": "Creado",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Mitsubishi",
                IdModelo: null,
                Modelo: "Montero Sport 2.4",
                Patente: "LVVP79"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Andres Gimenez",
                RUT: "11111111-1"
            },
            Siniestro: {
                Fecha: "11/05/2024",
                Hora: "12:45",
                Lugar: "Plaza de Armas de Santiago",
                Comuna: {
                    Id: null,
                    Nombre: "Santiago"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Choque",
                    Tercero: true
                },
                Relato: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, nisl eget luctus sollicitudin, dolor velit gravida magna, id pulvinar sem ipsum nec erat. Sed imperdiet, dolor a iaculis faucibus, ligula eros bibendum ipsum, eget lacinia felis arcu et justo. Aliquam eleifend interdum felis et sollicitudin. Sed vestibulum sollicitudin mattis. Maecenas dolor justo, maximus et orci vitae, pretium dignissim lorem. Phasellus massa neque, volutpat at dui sed, lobortis tempus ligula. Proin ultrices efficitur ipsum ac sagittis. Etiam imperdiet, urna eu iaculis finibus, nisl lorem porttitor neque, et aliquam justo ex at justo. Phasellus eu rutrum magna. Phasellus aliquam viverra mi, eget commodo est lacinia id. Nullam efficitur enim eu molestie vulputate. Proin suscipit, urna vel consectetur fermentum, odio turpis laoreet nisi, quis condimentum turpis sapien a leo.

                Nunc hendrerit viverra nisl ut cursus. Ut pharetra erat eu risus elementum dapibus. Suspendisse finibus placerat risus, at sollicitudin ipsum viverra a. Donec ex enim, iaculis non luctus quis, bibendum a est. Aliquam nulla arcu, molestie sit amet accumsan ac, faucibus quis arcu. Aenean faucibus non neque pretium congue. Suspendisse ullamcorper lacinia neque et iaculis. Ut urna massa, congue laoreet malesuada vitae, semper eu neque. Mauris ac mi consequat, imperdiet nisi quis, fermentum elit. Nunc nisi eros, tincidunt et leo ac, bibendum pretium sem. Sed non justo a diam interdum suscipit. Suspendisse in volutpat est. Maecenas venenatis elementum nulla in faucibus. Praesent auctor viverra mi in vestibulum. Pellentesque vulputate odio quis ante blandit molestie. Aenean tincidunt pharetra sem in hendrerit.`,
                DaniosVehiculoAsegurado: "Golpe importante en el parachoques delantero, luces delanteras dañadas",
                Comisaria: "1° Comisaría Santiago",
                NumeroPartePolicial: "11-5678"
            },
            Tercero: {
                Nombre: "Mónica Acuña",
                RUT: "44444444",
                RUTDigitoVerificador: "4",
                Telefono: "569 11111111",
                Email: "monica.acuna@gmail.com",
                Marca: {
                    Id: null,
                    Nombre: "Toyota"
                },
                Modelo: {
                    Id: null,
                    Nombre: "Etios"
                },
                Patente: "ABCD12",
                DaniosVehiculoTercero: "Golpe en parte trasera izquierda del auto"
            }
        }
    },
    {
        "FechaSiniestro": "12/05/2024",
        "Conductor": "Diego Maira",
        "Vehiculo": "Freightliner Business Class",
        "TipoSiniestro": "Vuelco",
        "DaniosTerceros": false,
        "Estado": "Asignado",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Freightliner",
                IdModelo: null,
                Modelo: "Business Class",
                Patente: "JPYG79"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Diego Maira",
                RUT: "22222222-2"
            },
            Siniestro: {
                Fecha: "12/05/2024",
                Hora: "20:15",
                Lugar: "Zona comercial Valparaiso",
                Comuna: {
                    Id: null,
                    Nombre: "Valparaiso"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Vuelco",
                    Tercero: false
                },
                Relato: `Integer pellentesque nibh eu magna dictum, vitae tristique elit consequat. Etiam dapibus velit ligula, in gravida ipsum dapibus id. Curabitur a erat nec leo fringilla accumsan. Praesent ullamcorper urna auctor, interdum ante nec, aliquam eros. Morbi ultrices diam mauris, vitae viverra tortor malesuada sit amet. Curabitur porttitor nunc vestibulum ligula scelerisque feugiat. Morbi hendrerit mollis sapien, vitae maximus dui luctus id. Integer vehicula lectus eget ullamcorper finibus. Integer ut rutrum quam. In rhoncus eros arcu, vel convallis sem sagittis in. Nullam maximus posuere pretium. Ut vel enim ut velit vehicula fermentum vel vel tellus. Proin in erat nec tortor aliquam convallis sed vel neque. Phasellus lacinia tempor arcu, sed varius mauris.

                Mauris fringilla posuere semper. Donec vitae leo sit amet ex accumsan accumsan. Etiam at eros a leo vulputate scelerisque. Sed porta turpis a sem porttitor, sit amet pharetra enim molestie. Nulla ultrices ut neque bibendum sollicitudin. Vestibulum vel augue id ex euismod tristique. Sed non arcu congue, convallis nulla nec, varius lacus. Fusce rhoncus eget dui at hendrerit.`,
                DaniosVehiculoAsegurado: "Se registraron daños en ...",
                Comisaria: "3° Comisaría Los Andes",
                NumeroPartePolicial: "13-9876"
            },
            Tercero: {
                Nombre: null,
                RUT: null,
                RUTDigitoVerificador: null,
                Telefono: null,
                Email: null,
                Marca: {
                    Id: null,
                    Nombre: null
                },
                Modelo: {
                    Id: null,
                    Nombre: null
                },
                Patente: null,
                DaniosVehiculoTercero: null
            }
        }
    },
    {
        "FechaSiniestro": "14/05/2024",
        "Conductor": "Pablo Sans",
        "Vehiculo": "Mercedez Benz Actros 1846",
        "TipoSiniestro": "Choque",
        "DaniosTerceros": true,
        "Estado": "En reparación",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Mercedez Benz",
                IdModelo: null,
                Modelo: "Actros 1846",
                Patente: "KVYP20"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Pablo Sans",
                RUT: "33333333-3"
            },
            Siniestro: {
                Fecha: "14/05/2024",
                Hora: "14:23",
                Lugar: "Zona residencial del Alto Biobio",
                Comuna: {
                    Id: null,
                    Nombre: "Alto Biobio"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Choque",
                    Tercero: true
                },
                Relato: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis egestas leo, eu euismod lacus. Cras varius tempus nisi vel sollicitudin. Maecenas interdum ex quis purus imperdiet auctor. Proin blandit ultricies purus eu vulputate. Quisque pharetra velit vitae massa sollicitudin consequat. Duis placerat mi nec blandit blandit. Ut semper consequat justo, non ultrices ligula aliquet vitae. Curabitur aliquam imperdiet tempor. Curabitur sit amet dolor eros. Nunc tincidunt dui a orci blandit hendrerit.",
                DaniosVehiculoAsegurado: "Se registraron daños menores en parachoques, y luz delantera izquierda dañada",
                Comisaria: "3° Comisaría Lota",
                NumeroPartePolicial: "33-1234"
            },
            Tercero: {
                Nombre: "Gonzalo Álvarez",
                RUT: "55555555",
                RUTDigitoVerificador: "5",
                Telefono: "569 9999 8888",
                Email: "gonzalo.alvarez@gmail.com",
                Marca: {
                    Id: null,
                    Nombre: "Fiat"
                },
                Modelo: {
                    Id: null,
                    Nombre: "Cronos CVT 1.3"
                },
                Patente: "WXYZ99",
                DaniosVehiculoTercero: "El vehículo del tercero registró daños en tren delantero, con un importante golpe en la parte izquierda."
            }
        }
    }
]

export const DataMisSiniestrosCerrados = [
    {
        "FechaSiniestro": "10/03/2024",
        "Conductor": "Carlos Gutierrez",
        "Vehiculo": "Hyundai H1MB 2.5 CRDI 12S",
        "TipoSiniestro": "Choque",
        "DaniosTerceros": true,
        "Estado": "Creado",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Hyundai",
                IdModelo: null,
                Modelo: "H1MB 2.5 CRDI 12S",
                Patente: "LFYJ62"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Carlos Gutierrez",
                RUT: "88888888-8"
            },
            Siniestro: {
                Fecha: "10/03/2024",
                Hora: "08:45",
                Lugar: "Plaza de Armas de Santiago",
                Comuna: {
                    Id: null,
                    Nombre: "Santiago"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Choque",
                    Tercero: true
                },
                Relato: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, nisl eget luctus sollicitudin, dolor velit gravida magna, id pulvinar sem ipsum nec erat. Sed imperdiet, dolor a iaculis faucibus, ligula eros bibendum ipsum, eget lacinia felis arcu et justo. Aliquam eleifend interdum felis et sollicitudin. Sed vestibulum sollicitudin mattis. Maecenas dolor justo, maximus et orci vitae, pretium dignissim lorem. Phasellus massa neque, volutpat at dui sed, lobortis tempus ligula. Proin ultrices efficitur ipsum ac sagittis. Etiam imperdiet, urna eu iaculis finibus, nisl lorem porttitor neque, et aliquam justo ex at justo. Phasellus eu rutrum magna. Phasellus aliquam viverra mi, eget commodo est lacinia id. Nullam efficitur enim eu molestie vulputate. Proin suscipit, urna vel consectetur fermentum, odio turpis laoreet nisi, quis condimentum turpis sapien a leo.

                Nunc hendrerit viverra nisl ut cursus. Ut pharetra erat eu risus elementum dapibus. Suspendisse finibus placerat risus, at sollicitudin ipsum viverra a. Donec ex enim, iaculis non luctus quis, bibendum a est. Aliquam nulla arcu, molestie sit amet accumsan ac, faucibus quis arcu. Aenean faucibus non neque pretium congue. Suspendisse ullamcorper lacinia neque et iaculis. Ut urna massa, congue laoreet malesuada vitae, semper eu neque. Mauris ac mi consequat, imperdiet nisi quis, fermentum elit. Nunc nisi eros, tincidunt et leo ac, bibendum pretium sem. Sed non justo a diam interdum suscipit. Suspendisse in volutpat est. Maecenas venenatis elementum nulla in faucibus. Praesent auctor viverra mi in vestibulum. Pellentesque vulputate odio quis ante blandit molestie. Aenean tincidunt pharetra sem in hendrerit.`,
                DaniosVehiculoAsegurado: "Golpe importante en el parachoques delantero, luces delanteras dañadas",
                Comisaria: "1° Comisaría Santiago",
                NumeroPartePolicial: "11-5678"
            },
            Tercero: {
                Nombre: "Mónica Acuña",
                RUT: "44444444",
                RUTDigitoVerificador: "4",
                Telefono: "569 11111111",
                Email: "monica.acuna@gmail.com",
                Marca: {
                    Id: null,
                    Nombre: "Toyota"
                },
                Modelo: {
                    Id: null,
                    Nombre: "Etios"
                },
                Patente: "ABCD12",
                DaniosVehiculoTercero: "Golpe en parte trasera izquierda del auto"
            }
        }
    },
    {
        "FechaSiniestro": "01/02/2024",
        "Conductor": "Álvaro Aranda",
        "Vehiculo": "Ford Ecoline",
        "TipoSiniestro": "Vuelco",
        "DaniosTerceros": false,
        "Estado": "Asignado",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Ford",
                IdModelo: null,
                Modelo: "Ecoline",
                Patente: "JYHT69"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Álvaro Aranda",
                RUT: "99999999"
            },
            Siniestro: {
                Fecha: "01/02/2024",
                Hora: "14:17",
                Lugar: "Zona comercial Valparaiso",
                Comuna: {
                    Id: null,
                    Nombre: "Valparaiso"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Vuelco",
                    Tercero: false
                },
                Relato: `Integer pellentesque nibh eu magna dictum, vitae tristique elit consequat. Etiam dapibus velit ligula, in gravida ipsum dapibus id. Curabitur a erat nec leo fringilla accumsan. Praesent ullamcorper urna auctor, interdum ante nec, aliquam eros. Morbi ultrices diam mauris, vitae viverra tortor malesuada sit amet. Curabitur porttitor nunc vestibulum ligula scelerisque feugiat. Morbi hendrerit mollis sapien, vitae maximus dui luctus id. Integer vehicula lectus eget ullamcorper finibus. Integer ut rutrum quam. In rhoncus eros arcu, vel convallis sem sagittis in. Nullam maximus posuere pretium. Ut vel enim ut velit vehicula fermentum vel vel tellus. Proin in erat nec tortor aliquam convallis sed vel neque. Phasellus lacinia tempor arcu, sed varius mauris.

                Mauris fringilla posuere semper. Donec vitae leo sit amet ex accumsan accumsan. Etiam at eros a leo vulputate scelerisque. Sed porta turpis a sem porttitor, sit amet pharetra enim molestie. Nulla ultrices ut neque bibendum sollicitudin. Vestibulum vel augue id ex euismod tristique. Sed non arcu congue, convallis nulla nec, varius lacus. Fusce rhoncus eget dui at hendrerit.`,
                DaniosVehiculoAsegurado: "Se registraron daños en ...",
                Comisaria: "3° Comisaría Los Andes",
                NumeroPartePolicial: "13-9876"
            },
            Tercero: {
                Nombre: null,
                RUT: null,
                RUTDigitoVerificador: null,
                Telefono: null,
                Email: null,
                Marca: {
                    Id: null,
                    Nombre: null
                },
                Modelo: {
                    Id: null,
                    Nombre: null
                },
                Patente: null,
                DaniosVehiculoTercero: null
            }
        }
    },
    {
        "FechaSiniestro": "14/01/2024",
        "Conductor": "Anibal Matellán",
        "Vehiculo": "Fiat Ducato Multijet 2.3",
        "TipoSiniestro": "Choque",
        "DaniosTerceros": true,
        "Estado": "En reparación",
        "Detalle": {
            VehiculoAsegurado: {
                Id: null,
                IdMarca: null,
                Marca: "Fiat",
                IdModelo: null,
                Modelo: "Ducato Multijet 2.3",
                Patente: "HTRB13"
            },
            ConductorAsegurado: {
                Id: null,
                Nombre: "Anibal Matellán",
                RUT: "44444444-4"
            },
            Siniestro: {
                Fecha: "14/05/2024",
                Hora: "14:23",
                Lugar: "Zona residencial del Alto Biobio",
                Comuna: {
                    Id: null,
                    Nombre: "Alto Biobio"
                },
                TipoSiniestro: {
                    Id: null,
                    Nombre: "Choque",
                    Tercero: true
                },
                Relato: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis egestas leo, eu euismod lacus. Cras varius tempus nisi vel sollicitudin. Maecenas interdum ex quis purus imperdiet auctor. Proin blandit ultricies purus eu vulputate. Quisque pharetra velit vitae massa sollicitudin consequat. Duis placerat mi nec blandit blandit. Ut semper consequat justo, non ultrices ligula aliquet vitae. Curabitur aliquam imperdiet tempor. Curabitur sit amet dolor eros. Nunc tincidunt dui a orci blandit hendrerit.",
                DaniosVehiculoAsegurado: "Se registraron daños menores en parachoques, y luz delantera izquierda dañada",
                Comisaria: "3° Comisaría Lota",
                NumeroPartePolicial: "33-1234"
            },
            Tercero: {
                Nombre: "Gonzalo Álvarez",
                RUT: "55555555",
                RUTDigitoVerificador: "5",
                Telefono: "569 9999 8888",
                Email: "gonzalo.alvarez@gmail.com",
                Marca: {
                    Id: null,
                    Nombre: "Fiat"
                },
                Modelo: {
                    Id: null,
                    Nombre: "Cronos CVT 1.3"
                },
                Patente: "WXYZ99",
                DaniosVehiculoTercero: "El vehículo del tercero registró daños en tren delantero, con un importante golpe en la parte izquierda."
            }
        }
    }
]