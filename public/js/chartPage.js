var thisPage = thisPage || {};
thisPage.humidUrl       = "https://aa708441-5a56-4bcd-80f1-8cf95a79e302-bluemix.cloudant.com/temp_humid/_design/default/_view/temp_humid?limit=144&reduce=false&descending=true";
thisPage.username = 'daysselycomentrentionces';
thisPage.password = '3fcbaf975eb0ce8e9fe9049319d026d0b41d433b';
//thisPage.humidUrl   = "https://5c1eba90-808c-4b7d-a05a-fd4f1904a8f0-bluemix.cloudant.com/temp_humid_test/_design/default/_view/temp_humid?limit=144&reduce=false&descending=true";
//thisPage.username   = '5c1eba90-808c-4b7d-a05a-fd4f1904a8f0-bluemix';
//thisPage.password   = '0256bc35d75240d0a4f340601412f0f272ed04c7797cbd58c4a74076a1607980';

thisPage.readData = function(){
    $.ajax({
        url : thisPage.humidUrl,
        method : 'GET',
        dataType : 'json',
        headers: {
            "Authorization": "Basic " + btoa(thisPage.username + ":" + thisPage.password)
        },
    })
    .done(function(data){
        var rows = data.rows.map(function(e,i){return e.value}).reverse();
        
        var dt1 = rows.filter(
                function(e){
                    return e.sensor.match('BME280-01');
                }).map(
                function(e){
                    return moment(e.datetime).format('MM/DD HH:mm');
                });
        var t1 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-01');
                }).map(
                function(e,i){
                    return e.temparture
                });
        var h1 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-01');
                }).map(
                function(e,i){
                    return e.humidity
                });
        var p1 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-01');
                }).map(
                function(e,i){
                    return e.pressure / 100
                });
        
        var dt2 = rows.filter(
                function(e){
                    return e.sensor.match('BME280-02');
                }).map(
                function(e){
                    return moment(e.datetime).format('MM/DD HH:mm');
                });
        var t2 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-02');
                }).map(
                function(e,i){
                    return e.temparture
                });
        var h2 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-02');
                }).map(
                function(e,i){
                    return e.humidity
                });
        var p2 = rows.filter(
                function(e,i){
                    return e.sensor.match('BME280-02');
                }).map(
                function(e,i){
                    return e.pressure / 100
                });

        var data_t1 = {
            labels : dt1,
            datasets : [{
                label : 'temparture BME280-01',
                fill : false,
                lineTension : 0.1,
                data : t1,
                borderJoinStyle: 'miter'
            }]
        };
        var data_h1 = {
            labels : dt1,
            datasets : [{
                label : 'humidity BME280-01',
                fill : false,
                lineTension : 0.1,
                data : h1,
                borderJoinStyle: 'miter'
            }]
        };
        var data_p1 = {
            labels : dt1,
            datasets : [{
                label : 'pressure BME280-01',
                fill : false,
                lineTension : 0.1,
                data : p1,
                borderJoinStyle: 'miter'
            }]
        };
        var data_t2 = {
            labels : dt2,
            datasets : [{
                label : 'temparture BME280-02',
                fill : false,
                lineTension : 0.1,
                data : t2,
                borderJoinStyle: 'miter'
            }]
        };
        var data_h2 = {
            labels : dt2,
            datasets : [{
                label : 'humidity BME280-02',
                fill : false,
                lineTension : 0.1,
                data : h2,
                borderJoinStyle: 'miter'
            }]
        };
        var data_p2 = {
            labels : dt2,
            datasets : [{
                label : 'pressure BME280-02',
                fill : false,
                lineTension : 0.1,
                data : p2,
                borderJoinStyle: 'miter'
            }]
        };
        var tChart1 = new Chart($('#chart_t1'),{
            type: 'line',
            data: data_t1
        });
        var hChart1 = new Chart($('#chart_h1'),{
            type: 'line',
            data: data_h1
        });
        var pChart1 = new Chart($('#chart_p1'),{
            type: 'line',
            data: data_p1
        });
        var tChart2 = new Chart($('#chart_t2'),{
            type: 'line',
            data: data_t2
        });
        var hChart2 = new Chart($('#chart_h2'),{
            type: 'line',
            data: data_h2
        });
        var pChart2 = new Chart($('#chart_p2'),{
            type: 'line',
            data: data_p2
        });
    });
};