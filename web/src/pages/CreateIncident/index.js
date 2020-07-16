import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ArrowLeft } from "react-feather"
import api from "../../services/api"
import "./style.css"
import logoImg from "../../assets/logo.svg"

function CreateIncident() {
   const ongId = localStorage.getItem("ongId")
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [value, setValue] = useState("")
	const history = useHistory()
	if (!ongId) {
		alert("É preciso estar logado para prosseguir.")
		history.goBack()
	}
   async function handleCreateIncident(event){
      event.preventDefault()
		const data = { title, description, value }
      try {
         await api.post("/incidents", data, { headers: { Authorization: ongId } })
         history.push("/profile")
      } catch (error) {
         alert("Erro ao criar caso. Tente novamente mais tarde.")
      }
   }
   return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>
					<h1>Cadastrar novo caso</h1>
					<p>Descreva o caso detalhadamente pra encontrar um herói para te ajudar a resolver isso.</p>
					<Link className="back-link" to="/profile">
						<ArrowLeft size={16} color="#e02041" />
						Voltar para Home
					</Link>
				</section>
				<form onSubmit={handleCreateIncident}>
					<input type="text" placeholder="Título do caso" value={title} onChange={event => setTitle(event.target.value)} />
					<textarea placeholder="Descrição" value={description} onChange={event => setDescription(event.target.value)} />
					<input type="text" placeholder="Valor em reais" value={value} onChange={event => setValue(event.target.value)} />
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}

export default CreateIncident