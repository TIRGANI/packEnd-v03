$(document).ready(function () {
    $('#fermes').hide();
    $('#parcelles').hide();


    // # ===============================
    // # = Nombre des ferme
    // # ===============================
    $.ajax({
        url: 'ferme/count',
        data: '',
        type: 'GET',
        success: function (data) {
            $('#ferme').html(data);
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });

    // # ===============================
    // # = Nombre des parcelle
    // # ===============================
    $.ajax({
        url: 'parcelle/count',
        data: '',
        type: 'GET',
        success: function (data) {
            $('#parcelle').html(data);
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });
    // # ===============================
    // # = Nombre des plantes
    // # ===============================
    $.ajax({
        url: 'plant/count',
        data: '',
        type: 'GET',
        success: function (data) {
            $('#plante').html(data);
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });
    // # ===============================
    // # = temprtaure
    // # ===============================
    $.ajax({
        url: 'grandeur/temperature',
        data: '',
        type: 'GET',
        success: function (data) {
            $('#temperature').html(data);
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });


    // # ===============================
    // # = Nombre arosage par parcelle
    // # ===============================
    $.ajax({
        url: 'parcelle/countarosage',
        contentType: "application/json",
        dataType: "json",
        data: '',
        type: 'GET',
        async: false,
        success: function (data) {
            console.log(data);

            var labels = new Array();
            var dt = new Array();

            Object.keys(data).forEach(key => {
                labels.push(key); // returns the keys in an object
                dt.push(data[key]); // returns the appropriate value
            });

            var ctx = document.getElementById('byYear').getContext('2d');
            var byYear = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dt,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Nombre d\'arosage par parcelle',
                        fontSize: 21,
                        padding: 20,
                        fontFamily: 'Calibri',
                    },
                    legend: {
                        display: false
                    },
                    type: 'line',
                    scales: {

                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Nombre d\'arosage'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Parcelle'
                            }
                        }],
                    }
                }
            });
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });
    //list des fermes
    $.ajax({
        url: '/ferme/all',
        type: 'GET',
        success: function (data) {
            var option = '';
            data.forEach(e => {
                option += '<option value =' + e.id + '>' + e.id + '</option>';
            });

            $('#fermes').append(option);
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }

    });
    // # ===============================
    // # = Nombre des parcelles par ferme
    // # ===============================
    $.ajax({
        url: 'parcelle/countparcelle',
        contentType: "application/json",
        dataType: "json",
        data: '',
        type: 'GET',
        async: false,
        success: function (data) {
            console.log(data);

            var labels = new Array();
            var dt = new Array();

            Object.keys(data).forEach(key => {
                labels.push(key); // returns the keys in an object
                dt.push(data[key]); // returns the appropriate value
            });

            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dt,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Nombre des parcelles par ferme',
                        fontSize: 21,
                        padding: 20,
                        fontFamily: 'Calibri',
                    },
                    legend: {
                        display: false
                    },
                    type: 'line',
                    scales: {

                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Nombre des parcelles'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Ferme'
                            }
                        }],
                    }
                }
            });
        },
        error: function (jqXHR, textStatus,
                         errorThrown) {
            console.log(textStatus);
        }
    });
    // # ===============================
    // # = Evolution Temperature par Ferme
    // # ===============================
    $('#choix').on('change',
        function (e) {
            var idferm = $('option:selected', this);
            if (idferm.val() == "temp") {
                //select Temperature graph--------------------------------------
                $('#parcelles').hide();
                $('#fermes').show();
                $('#EvaluHum').hide();
                $('#EvaluTemp').show();
                $('#ConsomationParcell').hide();
                $('#fermes').on('change',
                    function (e) {

                        var idferm = $('option:selected', this);
                        $.ajax({
                            url: '/parcelle/EvaluTemp/' + idferm.val(),
                            contentType: "application/json",
                            dataType: "json",
                            data: '',
                            type: 'GET',
                            async: false,
                            success: function (data) {
                                console.log(data);
                                $('#parcelles').hide();


                                var labels = new Array();
                                var dt = new Array();

                                Object.keys(data).forEach(key => {
                                    labels.push(key); // returns the keys in an object
                                    dt.push(data[key]); // returns the appropriate value
                                });

                                var ctx = document.getElementById('EvaluTemp').getContext('2d');
                                var EvaluTemp = new Chart(ctx, {
                                    type: 'line',
                                    data: {
                                        labels: labels,
                                        datasets: [{
                                            data: dt,
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        title: {
                                            display: true,
                                            text: 'Evolution Temperature par Ferme',
                                            fontSize: 21,
                                            padding: 20,
                                            fontFamily: 'Calibri',
                                        },
                                        legend: {
                                            display: false
                                        },
                                        type: 'line',
                                        scales: {

                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                },
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Temperature'
                                                }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Date'
                                                }
                                            }],
                                        }
                                    }
                                });
                            },
                            error: function (jqXHR, textStatus,
                                             errorThrown) {
                                console.log(textStatus);
                            }
                        });
                    });
                //end Temperature graph
            }
            if (idferm.val() == "hum") {
                //select Humedite graph--------------------------------------
                $('#parcelles').hide();
                $('#fermes').show();
                $('#EvaluTemp').hide();
                $('#EvaluHum').show();
                $('#ConsomationParcell').hide();
                $('#fermes').on('change',
                    function (e) {
                        var idferm = $('option:selected', this);
                        $.ajax({
                            url: '/parcelle/EvaluHum/' + idferm.val(),
                            contentType: "application/json",
                            dataType: "json",
                            data: '',
                            type: 'GET',
                            async: false,
                            success: function (data) {
                                console.log(data);
                                $('#parcelles').hide();

                                var labels = new Array();
                                var dt = new Array();

                                Object.keys(data).forEach(key => {
                                    labels.push(key); // returns the keys in an object
                                    dt.push(data[key]); // returns the appropriate value
                                });

                                var ctx = document.getElementById('EvaluHum').getContext('2d');
                                var EvaluHum = new Chart(ctx, {
                                    type: 'line',
                                    data: {
                                        labels: labels,
                                        datasets: [{
                                            data: dt,
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        title: {
                                            display: true,
                                            text: 'Evolution Humédité par Ferme',
                                            fontSize: 21,
                                            padding: 20,
                                            fontFamily: 'Calibri',
                                        },
                                        legend: {
                                            display: false
                                        },
                                        type: 'line',
                                        scales: {

                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                },
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Humédite'
                                                }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Date'
                                                }
                                            }],
                                        }
                                    }
                                });
                            },
                            error: function (jqXHR, textStatus,
                                             errorThrown) {
                                console.log(textStatus);
                            }
                        });
                    });
                //end Humedite graph-----------------------------------
            }
            if (idferm.val() == "qtt") {
                //select qtt eau consomer graph--------------------------------------
                $('#parcelles').hide();
                $('#fermes').show();
                $('#EvaluHum').hide();
                $('#EvaluTemp').hide();
                $('#ConsomationParcell').show();

                $('#fermes').on('change',
                    function (e) {
                        var idferm = '';
                        idferm = $('option:selected', this);

                        $.ajax({
                            url: '/parcelle/spparcelles/' + idferm.val(),
                            type: 'GET',
                            success: function (dat) {
                                $('#parcelles').show();
                                $('#parcelles').html('<option value="0">choisir une parcelle</option>');
                                var option = '';
                                dat.forEach(e => {
                                    option += '<option value =' + e.id + '>' + e.id + '</option>';
                                });

                                $('#parcelles').append(option);
                                //on selected parcelle item
                                $('#parcelles').on('change',
                                    function (e) {
                                        var idparcelle = '';
                                        idparcelle = $('option:selected', this);
                                     //   alert("parcelle item : " + idparcelle.val());
                                        //graph qtt list with id parcelle:

                                        $.ajax({
                                            url: '/parcelle/ConsomationParcell/' + idparcelle.val(),
                                            contentType: "application/json",
                                            dataType: "json",
                                            data: '',
                                            type: 'GET',
                                            async: false,
                                            success: function (data) {
                                                console.log(data);
                                            //    alert("salam");
                                                $('#ConsomationParcell').show();

                                                var labels = new Array();
                                                var dt = new Array();

                                                Object.keys(data).forEach(key => {
                                                    labels.push(key); // returns the keys in an object
                                                    dt.push(data[key]); // returns the appropriate value
                                                });

                                                var ctx = document.getElementById('ConsomationParcell').getContext('2d');
                                                var ConsomationParcell = new Chart(ctx, {
                                                    type: 'line',
                                                    data: {
                                                        labels: labels,
                                                        datasets: [{
                                                            data: dt,
                                                            backgroundColor: [
                                                                'rgba(255, 99, 132, 0.2)',
                                                                'rgba(54, 162, 235, 0.2)',
                                                                'rgba(255, 206, 86, 0.2)',
                                                                'rgba(75, 192, 192, 0.2)',
                                                                'rgba(153, 102, 255, 0.2)',
                                                                'rgba(255, 159, 64, 0.2)'
                                                            ],
                                                            borderColor: [
                                                                'rgba(255, 99, 132, 1)',
                                                                'rgba(54, 162, 235, 1)',
                                                                'rgba(255, 206, 86, 1)',
                                                                'rgba(75, 192, 192, 1)',
                                                                'rgba(153, 102, 255, 1)',
                                                                'rgba(255, 159, 64, 1)'
                                                            ],
                                                            borderWidth: 1
                                                        }]
                                                    },
                                                    options: {
                                                        title: {
                                                            display: true,
                                                            text: 'Evolution Consomation D\'eau par Parcelle Secelctionner',
                                                            fontSize: 21,
                                                            padding: 20,
                                                            fontFamily: 'Calibri',
                                                        },
                                                        legend: {
                                                            display: false
                                                        },
                                                        type: 'line',
                                                        scales: {

                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                },
                                                                scaleLabel: {
                                                                    display: true,
                                                                    labelString: 'Consomation Par litre'
                                                                }
                                                            }],
                                                            xAxes: [{
                                                                scaleLabel: {
                                                                    display: true,
                                                                    labelString: 'Date'
                                                                }
                                                            }],
                                                        }
                                                    }
                                                });
                                            },
                                            error: function (jqXHR, textStatus,
                                                             errorThrown) {
                                                console.log(textStatus);
                                            }
                                        });
                                        //end graph qtt
                                    });


                            },
                            error: function (jqXHR, textStatus,
                                             errorThrown) {
                                console.log(textStatus);
                            }

                        });
                        //-----------end list parcelles----------------

                    });
                //end  qtt eau consomer graph
            }
            /* $.ajax({

             })*/
        });
    //


});