import React, { useEffect, useState } from "react"
import { Link,useHistory } from "react-router-dom"
import { Power, Trash2 } from "react-feather"
import api from "../../services/api"
import "./style.css"
import logoImg from "../../assets/logo.svg"

function Profile() {
	const ongId = localStorage.getItem("ongId")
	const ongName = localStorage.getItem("ongName")
   const [incidents, setIncidents] = useState([])
	const history = useHistory()
	if (!ongId) {
		alert("É preciso estar logado para prosseguir.")
		history.goBack()
	}
	useEffect(() => {
		api.get("profile", { headers: { Authorization: ongId } }).then(response => setIncidents(response.data))
	}, [ongId, incidents, history])
	async function handleDeleteIncident(id) {
		try {
			await api.delete(`incidents/${id}`, { headers: { Authorization: ongId } })
		} catch (error) {
			alert("Erro ao deletar caso, tente novamente.")
		}
	}
	function handleLogout() {
      localStorage.clear()
      history.push("/")
	}
	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be The Hero"/>
				<span>Bem vinda, {ongName}!</span>
				<Link className="button" to="/incidents/create">Cadastrar novo caso</Link>
				<button onClick={handleLogout}>
					<Power size={18} color="#e02041" />
				</button>
			</header>
			<h1>Casos cadastrados</h1>
			<ul>
				{incidents.map(incident => {
					return (
						<li key={incident.id}>
							<strong>CASO:</strong>
							<p>{incident.title}</p>
							<strong>DESCRIÇÃO:</strong>
							<p>{incident.description}</p>
							<strong>VALOR:</strong>
							<p>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(incident.value)}</p>
							<button onClick={() => handleDeleteIncident(incident.id)}>
								<Trash2 siz={20} coloer="#a8a8b3" />
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Profile