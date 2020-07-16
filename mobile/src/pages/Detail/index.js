import React from "react"
import { Text, View, Image, TouchableOpacity, Linking, ScrollView } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import * as MailComposer from "expo-mail-composer"
import styles from "./styles"
import logoImage from "../../assets/logo.png"

function Detail() {
   const navigation = useNavigation()
   const route = useRoute()
   const incident = route.params.incident
   const message = `Olá, ${incident.name}! Estou entrando em contato para ajudar no caso "${incident.title}".`

   function navigateBack() {
      navigation.goBack()
   }
   
   function sendMail() {
      MailComposer.composeAsync({
         subject: `Herói do caso: ${incident.title}`,
         recipients: [incident.email],
         body: message
      })
   }

   function sendWhatsapp() {
      Linking.openURL(`whatsapp://send?phone=55 ${incident.whatsapp}&text=${message}`)
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={logoImage}></Image>
            <TouchableOpacity onPress={navigateBack}>
               <Feather name="arrow-left" size={28} color="#e02041"></Feather>
            </TouchableOpacity>
         </View>
         <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style={styles.incident}>
               <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
               <Text style={styles.incidentValue}>{incident.name} de {incident.city} / {incident.uf}</Text>
               <Text style={styles.incidentProperty}>CASO:</Text>
               <Text style={styles.incidentValue}>{incident.title}</Text>
               <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
               <Text style={styles.incidentValue}>{incident.description}</Text>
               <Text style={styles.incidentProperty}>VALOR:</Text>
               <Text style={styles.incidentValue}>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(incident.value)}</Text>
            </View>
            <View style={styles.contactBox}>
               <Text style={styles.contactTitle}>Salve o dia!</Text>
               <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>
               <Text style={styles.contactDescription}>Entre em contato:</Text>
               <View style={styles.buttons}>
                  <TouchableOpacity style={styles.button} onPress={sendWhatsapp}>
                     <Text style={styles.buttonText}>Whatsapp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={sendMail}>
                     <Text style={styles.buttonText}>E-mail</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

export default Detail