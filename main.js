const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: false,
      title: "",
      impressoras: [
        {
          nPatrimonio: "0335",
          secao: "Planejamento",
          ip: "10.67.26.47",
          marca: "ricoh",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "0348",
          secao: "EMP",
          ip: "10.67.26.171",
          marca: "ricoh",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "0350",
          secao: "SAO",
          ip: "10.67.26.172",
          marca: "ricoh",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "0353",
          secao: "SAF",
          ip: "10.67.26.114",
          marca: "ricoh",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "0376",
          secao: "Gabinete",
          ip: "10.67.26.48",
          marca: "ricoh",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "1231",
          secao: "Planejamento",
          ip: "10.67.26.56",
          marca: "sansung",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "5193",
          secao: "Info - Redes",
          ip: "10.67.26.37",
          marca: "sansung",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "40116",
          secao: "SAO",
          ip: "10.67.26.158",
          marca: "sansung",
          titulo: "",
          ipFormatado: "",
        },
        {
          nPatrimonio: "40115",
          secao: "Info - Desenvolvimento",
          ip: "10.67.26.173",
          marca: "sansung",
          titulo: "",
          ipFormatado: "",
        },
      ],
    };
  },
  created: function () {
    this.impressoras.map(function (impressora) {
      impressora.titulo =
        "DOC " + impressora.secao + " Patrimônio: " + impressora.nPatrimonio;
      impressora.ipFormatado = impressora.ip.replaceAll(".", "%2e");
      return impressora;
    });
  },
});
