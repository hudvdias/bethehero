import { StyleSheet } from "react-native"

export default StyleSheet.create({
   container : {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 20
   },
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   headerText: {
      fontSize: 16,
      color: "gray"
   },
   headerTextBold: {
      fontWeight: "bold"
   },
   title: {
      fontSize: 32,
      marginTop: 24,
      marginBottom: 8,
      fontWeight: "bold",
   },
   description: {
      fontSize: 16,
      lineHeight: 24,
      color: "gray"
   },
   incidentList: {
      marginTop: 24
   },
   incident: {
      padding: 20,
      borderRadius: 8,
      backgroundColor: "white",
      marginBottom: 16
   },
   incidentProperty: {
      fontWeight: "bold"
   },
   incidentValue: {
      marginTop: 4,
      fontSize: 16,
      marginBottom: 20,
      color: "dimgray"
   },
   detailButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   detailButtonText: {
      color: "#e02041",
      fontSize: 16,
      fontWeight: "bold"
   }
})