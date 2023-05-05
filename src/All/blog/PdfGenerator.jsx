import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const PdfGenerator = () => {
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 12,
      paddingTop: 35,
      paddingLeft: 35,
      paddingRight: 35,
      paddingBottom: 40,
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: "bold",
    },
    content: {
      fontSize: 14,
      marginBottom: 8,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>
          What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.content}>
          A custom hook is a reusable JavaScript function that allows a
          developer to extract component logic into a separate function that can
          be shared across multiple components in a React application. Custom
          hooks start with the prefix use, and can call other built-in hooks or
          other custom hooks. Developers will create custom hooks in order to
          promote code reusability and make their code more modular. By
          extracting commonly used component logic into a custom hook,
          developers can reduce the amount of boilerplate code in their
          components and simplify maintenance of the codebase.
        </Text>
        <Text style={styles.heading}>
          How to validate React props using PropTypes
        </Text>
        <Text style={styles.content}>
          propTypes is used for props validation. If some of the props arent
          using the correct type that we assigned, we will get a console
          warning. After we specify validation patterns, we will set App.
          defaultProps.
        </Text>
        <Text style={styles.heading}>
          Tell us the difference between nodejs and express js.
        </Text>
        <Text style={styles.content}>
          Node.js is a JavaScript runtime that allows developers to use
          JavaScript on the server-side. It provides an execution environment
          for JavaScript that is independent of the web browser, and allows for
          high-speed, scalable network applications. Express.js, on the other
          hand, is a web application framework that runs on top of Node.js. It
          provides developers with a set of tools for building web applications,
          including routing, middleware handling, and template engine
          integration.
        </Text>
        <Text style={styles.heading}>
          What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.content}>
          A custom hook is a reusable JavaScript function that allows a
          developer to extract component logic into a separate function that can
          be shared across multiple components in a React application. Custom
          hooks start with the prefix use, and can call other built-in hooks or
          other custom hooks. Developers will create custom hooks in order to
          promote code reusability and make their code more modular. By
          extracting commonly used component logic into a custom hook,
          developers can reduce the amount of boilerplate code in their
          components and simplify maintenance of the codebase.
        </Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfGenerator;
