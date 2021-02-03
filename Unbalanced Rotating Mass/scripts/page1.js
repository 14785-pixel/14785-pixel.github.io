function clearGraphs() {
    position_graph.delete();
}

function runPage1() {
    background(255);
    image(bg, 0, 0)
    stroke(0);
    fill(0);

    push();
    textSize(36);
    textFont("Times");
    text('ROTATING UNBALANCE', 255, 50);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    spring1.initialise(k.inp, m.inp, z.inp, slider_force.inp, slider_ang_freq.inp);
    spring1.update(t, factor);
    spring1.show(0, 0, 0);

    position_graph.update(spring1.y);
    position_graph.draw(0, 0, 255)

    strokeWeight(0)

    textSize(12);
    text('wn = ' + spring1.wn.toFixed(4) + " rad/s", 310, 520);
    text('η = ' + (slider_ang_freq.inp / spring1.wn).toFixed(4), 310, 535);
    text('z = ' + z.inp.toFixed(4), 310, 550);

    textSize(24);
    text("Harmonic Exitation", 95, 495);

    k.draw();
    m.draw();
    z.draw();
    slider_force.draw();
    slider_ang_freq.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
