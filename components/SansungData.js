app.component("sansung-data", {
  props: {
    ip: {
      type: String,
      requeried: true,
    },
  },
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    axios
      .get("./sansung.php?ip=" + this.ip)
      .then((response) => {
        this.item = response.data;
      })
      .catch((e) => {
        console.error(e);
      });
  },
  template: /*html*/ `
    <table>
      <tr>
        <td>No. serie do aparelho</td><td>{{ item.GXI_SYS_SERIAL_NUM }}</td>
      </tr>
    </table>
    <br />
    <table>
      <tr>
          <th>Utiliz totala</th>
          <th>Imprimir</th>
          <th>Copiar</th>
          <th>Impre Fax</th>
          <th>Relatorio</th>
          <th>Total</th>
      </tr>
      <tr>
          <td>Monocr Simples</td>
          <td>{{ item.GXI_BILLING_SIMPLEX_BW_PRINT_CNT }}</td>
          <td>{{ item.GXI_BILLING_SIMPLEX_BW_COPY_CNT }}</td>
          <td>{{ item.GXI_BILLING_SIMPLEX_BW_FAX_CNT }}</td>
          <td>{{ item.GXI_BILLING_SIMPLEX_BW_REPORT_CNT }}</td>
          <td>{{ item.GXI_BILLING_SIMPLEX_BW_TOTAL_CNT }}</td>
          
      </tr>
      <tr>
          <td>Duplex</td>
          <td>{{ item.GXI_BILLING_DUPLEX_BW_PRINT_CNT }}</td>
          <td>{{ item.GXI_BILLING_DUPLEX_BW_COPY_CNT }}</td>
          <td>{{ item.GXI_BILLING_DUPLEX_BW_FAX_CNT }}</td>
          <td>{{ item.GXI_BILLING_DUPLEX_BW_REPORT_CNT }}</td>
          <td>{{ item.GXI_BILLING_DUPLEX_BW_TOTAL_CNT }}</td>
      </tr>
      <tr>
          <td>Total Impressoes</td>
          <td>{{ item.GXI_BILLING_PRINT_TOTAL_IMP_CNT }}</td>
          <td>{{ item.GXI_BILLING_COPY_TOTAL_IMP_CNT }}</td>
          <td>{{ item.GXI_BILLING_FAX_TOTAL_IMP_CNT }}</td>
          <td>{{ item.GXI_BILLING_REPORT_TOTAL_IMP_CNT }}</td>
          <td>{{ item.GXI_BILLING_TOTAL_IMP_CNT }}</td>
      </tr>
    </table><br/>
    <table>
      <tr>
        <th>Util env fax</th><th>paginas</th>
      </tr>
      <tr>
        <td>Fax int env</td><td>{{ item.GXI_BILLING_EMBEDDED_FAX_SENT_CNT }}</td>
      </tr>
    </table><br/>
    <table>
    <tr>
      <th>Enviar uso</th><th>paginas</th>
    </tr>
    <tr>
      <td>Env. p/ email</td><td>{{ item.GXI_BILLING_SEND_TO_EMAIL_CNT }}</td>
    </tr>
    <tr>
      <td>Env. p/ SMB</td><td>{{ item.GXI_BILLING_SEND_TO_SMB_CNT }}</td>
    </tr>
    <tr>
      <td>Env. p/ FTP</td><td>{{ item.GXI_BILLING_SEND_TO_FTP_CNT }}</td>
    </tr>
    <tr>
      <td>Env. p/ USB</td><td>{{ item.GXI_BILLING_SEND_TO_USB_CNT }}</td>
    </tr>
    <tr>
      <td>Env. p/ PC</td><td>{{ item.GXI_BILLING_SEND_TO_PC_CNT }}</td>
    </tr>
    <tr>
      <td>Env. p/ outros</td><td>{{ item.GXI_BILLING_SEND_TO_OTHERS_CNT }}</td>
    </tr>
    <tr>
      <td>Total</td><td>{{ item.GXI_BILLING_SEND_TO_TOTAL_CNT }}</td>
    </tr>
  </table>

        
        `,
});
// http://10.67.26.173/sws/app/information/counters/counters.json
