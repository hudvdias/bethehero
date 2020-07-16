import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { LogIn } from "react-feather"
import api from "../../services/api"
import "./style.css"
import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"

function Logon() {
	const [id, setId] = useState("")
	const history = useHistory()
	async function handleLogin(event) {
		event.preventDefault()
		try {
			const response = await api.post("sessions", { id })
			localStorage.setItem("ongId", id)
			localStorage.setItem("ongName", response.data.name)
			history.push("/profile")
		} catch (error) {
			alert("Falha no login, tente novamente mais tarde.")
		}
	}
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero"/>
				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>
					<input type="text" placeholder="Sua ID" value={id} onChange={event => setId(event.target.value)} />
					<button type="submit" className="button">Entrar</button>
					<Link className="back-link" to="/register">
						<LogIn font={16} color="#e02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Heroes"/>
		</div>
	)
}

export default Logon