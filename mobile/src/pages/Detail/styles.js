import { StyleSheet } from "react-native"

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 20
   },
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 24
   },
   incident: {
      padding: 20,
      borderRadius: 8,
      backgroundColor: "white",
      marginBottom: 16
   },
   incidentProperty: {
      fontWeight: "bold",
      marginTop: 20
   },
   incidentValue: {
      marginTop: 4,
      fontSize: 16,
      color: "dimgray"
   },
   contactBox: {
      padding: 20,
      borderRadius: 8,
      backgroundColor: "white",
      marginBottom: 16
   },
   contactTitle: {
      fontWeight: "bold",
      fontSize: 20,
      lineHeight: 30
   },
   contactDescription: {
      fontSize: 16,
      color: "dimgray",
      marginTop: 20
   },
   buttons: {
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16
   },
   button: {
      backgroundColor: "#e02041",
      borderRadius: 8,
      height: 50,
      width: "48%",
      justifyContent: "center",
      alignItems: "center"
   },
   buttonText: {
      color: "white",
      fontSize: 16
   }
})