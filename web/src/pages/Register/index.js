import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ArrowLeft } from "react-feather"
import api from "../../services/api"
import "./style.css"
import logoImg from "../../assets/logo.svg"

function Register() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [whatsapp, setWhatsapp] = useState("")
	const [city, setCity] = useState("")
	const [uf, setUf] = useState("")
	const history = useHistory()
	async function handleRegister(event) {
		event.preventDefault()
		const data = { name, email, whatsapp, city, uf }
		try {
			const response = await api.post("ongs", data)
			alert(`ONG cadastrada com sucesso! Seu ID de acesso é: "${response.data.id}". NÃO PERCA!`)
			history.push("/")
		} catch (error) {
			alert("Erro ao cadastrar ONG. Tente novamente mais tarde.")
		}
	}
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
					<Link className="back-link" to="/">
						<ArrowLeft size={16} color="#e02041" />
						Voltar para Logon
					</Link>
				</section>
				<form onSubmit={handleRegister}>
					<input type="text" placeholder="Nome da ONG" value={name} onChange={event => setName(event.target.value)} />
					<input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)} />
					<input type="text" placeholder="Whatsapp" value={whatsapp} onChange={event => setWhatsapp(event.target.value)} />
					<div className="input-group">
						<input type="text" placeholder="Cidade" value={city} onChange={event => setCity(event.target.value)} />
						<input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={event => setUf(event.target.value)} />
					</div>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}

export default Register