let A = Number(prompt("Insira o lado A"));
let B = Number(prompt("Insira o lado B"));
let C = Number(prompt("Insira o lado C"));

const verificadorPositivo = (A, B, C) => (A > 0 && B > 0 && C > 0);

function ehTriangulo(A, B, C) {
    if (A + B > C && A + C > B && B + C > A) {
        return true;
    } else {
        alert("Não é triângulo");
        return false;
    }
}

function tipoTriangulo(A, B, C) {
    if (A === B && B === C) {
        alert("É equilátero");
    } else if (A === B || A === C || B === C) {
        alert("É isósceles");
    } else {
        alert("É escaleno");
    }
}

if (verificadorPositivo(A, B, C)) {
    if (ehTriangulo(A, B, C)) {
        tipoTriangulo(A, B, C);
    }
} else {
    alert("Os lados devem ser números positivos!");
}
