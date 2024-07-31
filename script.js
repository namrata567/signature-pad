document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("signature-pad");
    const context = canvas.getContext("2d");
    const clearButton = document.getElementById("clear");
    const saveButton = document.getElementById("save");
    let drawing = false;

    // Set the canvas background to white
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set the drawing color and line width
    context.strokeStyle = "black";
    context.lineWidth = 2;

    // Function to start drawing
    function startDrawing(event) {
        drawing = true;
        context.beginPath();
        context.moveTo(event.offsetX, event.offsetY);
    }

    // Function to draw
    function draw(event) {
        if (!drawing) return;
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
    }

    // Function to stop drawing
    function stopDrawing() {
        drawing = false;
        context.closePath();
    }

    // Clear the canvas
    clearButton.addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Reset the canvas background to white after clearing
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    });

    // Save the drawing as a JPG file
    saveButton.addEventListener("click", function() {
        const dataURL = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "signature.jpg";
        link.click();
    });

    // Event listeners for drawing
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
});
