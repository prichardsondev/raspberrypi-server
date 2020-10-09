var socket = io();

socket.on('updateClient', data => {
    var lamp = document.getElementById("lamp");
    var led = document.getElementById("led");

    (data.lamp  === 0 ? (lamp.innerHTML = "Lamp Off", lamp.style.color = "#fff") :
        (lamp.innerHTML = "Lamp On", lamp.style.color = "#ffff00"));

    (data.led === 0 ? (led.innerHTML = "LED Off", led.style.color = "#fff") :
        (led.innerHTML = "LED On", led.style.color = "#ffff00"));
});

function toggle(pin) {
    console.log(pin);
    socket.emit('updateServer', pin);
}





