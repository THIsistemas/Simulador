export const numeroALetras:any = (numero:number) => {
  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const miles = ['', 'mil', 'millón', 'mil millones', 'billón', 'mil billones', 'trillón', 'mil trillones'];

  if (numero < 10) {
    return unidades[numero];
  } else if (numero < 20) {
    return especiales[numero - 10];
  } else if (numero < 100) {
    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;
    if (unidad === 0) {
      return decenas[decena];
    } else {
      return decenas[decena] + ' y ' + unidades[unidad];
    }
  } else if (numero < 1000) {
    const centena = Math.floor(numero / 100);
    const resto = numero % 100;
    if (resto === 0) {
      return unidades[centena] + 'cientos';
    } else {
      return unidades[centena] + 'cientos ' + numeroALetras(resto);
    }
  } else {
    let i = 0;
    let parteEntera = [];
    while (numero > 0) {
      const bloque = numero % 1000;
      if (bloque !== 0) {
        const palabra = numeroALetras(bloque) + ' ' + miles[i];
        parteEntera.unshift(palabra);
      }
      numero = Math.floor(numero / 1000);
      i++;
    }
    return parteEntera.join(' ');
  }
}