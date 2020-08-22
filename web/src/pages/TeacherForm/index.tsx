import React, { useState, FormEvent } from 'react'
import {useHistory} from "react-router-dom"

import api from '../../services/api'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from "../../assets/images/icons/warning.svg"
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import "./styles.css"


function TeacherForm(){
    const history = useHistory()

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [bio, setBio] = useState("")

    const [subject, setSubject] = useState("")
    const [cost, setCost] = useState("")

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0,from: "",to: ""}
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0,from: "",to: ""}
        ])
    }

    function handleCreateClass (e: FormEvent){
        e.preventDefault()

        api.post("classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("Cadastro realizado com sucesso!")
            history.push("/")
        }).catch((err) => {
            console.log(err)
            alert("Erro no cadastro!")
        })

    }

    function setScheduleItemValue(position: number, field: string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <Input name="name" 
                                label="Nome completo" 
                                value={name} 
                                onChange={(e) => {setName(e.target.value)}}
                            />
                            <Input name="avatar" 
                                label="Avatar"
                                value={avatar} 
                                onChange={(e) => {setAvatar(e.target.value)}}
                            />
                            <Input name="whatsapp"
                                label="WhatsApp"
                                value={whatsapp} 
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                            />
                            <Textarea 
                                name="bio" 
                                label="Biografia"
                                value={bio} 
                                onChange={(e) => {setBio(e.target.value)}} 
                            />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                            <Select name="subject" 
                                    label="Matéria" 
                                    value={subject}
                                    onChange={(e) => { setSubject(e.target.value)}}
                                    options={[
                                        {value: "Analise e projetos de sistemas", label: "Analise e projetos de sistemas"},
                                        {value: "Arquitetura de computadores", label: "Arquitetura de computadores"},
                                        {value: "Artes", label: "Artes"},
                                        {value: "Banco de dados", label: "Banco de dados"},
                                        {value: "Bioética e biosegurança", label: "Bioética e biosegurança"},
                                        {value: "Biologia", label: "Biologia"},
                                        {value: "Biologia molecular", label: "Biologia molecular"},
                                        {value: "Bioquímica", label: "Bioquímica"},
                                        {value: "Biotecnologia ambiental e agropecuária", label: "Biotecnologia ambiental e agropecuária"},
                                        {value: "Biotecnologia de alimentos", label: "Biotecnologia de alimentos"},
                                        {value: "Biotecnologia de produtos naturais e biofármacos", label: "Biotecnologia de produtos naturais e biofármacos"},
                                        {value: "Biotecnologia industrial", label: "Biotecnologia industrial"},
                                        {value: "Controle de qualidade de bioprodutos", label: "Controle de qualidade de bioprodutos"},
                                        {value: "Educação física", label: "Educação física"},
                                        {value: "Engenharia de software", label: "Engenharia de software"},
                                        {value: "Empreendedorismo", label: "Empreendedorismo"},
                                        {value: "Espanhol", label: "Espanhol"},
                                        {value: "Extração, purificação, isolamento e identificação de bioprodutos", label: "Extração, purificação, isolamento e identificação de bioprodutos"},
                                        {value: "Fermentação", label: "Fermentação"},
                                        {value: "Filosofia", label: "Filosofia"},
                                        {value: "Física", label: "Física"},
                                        {value: "Geografia", label: "Geografia"},
                                        {value: "História", label: "História"},
                                        {value: "Introdução a biotecnologia", label: "Introdução a biotecnologia"},
                                        {value: "Introdução a informática", label: "Introdução a informática"},
                                        {value: "Interação homem computador", label: "Interação homem computador"},
                                        {value: "Inglês", label: "Inglês"},
                                        {value: "Linguagem de programação para web", label: "Linguagem de programação para web"},
                                        {value: "Lógica e linguagem de programação", label: "Artes"},
                                        {value: "Português", label: "Português"},
                                        {value: "Matemática", label: "Matemática"},
                                        {value: "Metodologia", label: "Metodologia"},
                                        {value: "Práticas de laboratório em biologia", label: "Práticas de laboratório em biologia"},
                                        {value: "Programação orientada a objetos", label: "Programação orientada a objetos"},
                                        {value: "Programação para dispositivos móveis", label: "Programação para dispositivos móveis"},
                                        {value: "Projetos", label: "Projetos"},
                                        {value: "Química", label: "Química"},
                                        {value: "Química orgânica", label: "Química orgânica"},
                                        {value: "Redes de computadores", label: "Redes de computadores"},
                                        {value: "Sistemas operacionais", label: "Sistemas operacionais"},
                                        {value: "Sociologia", label: "Sociologia"},
                                        {value: "Tópicos especiais em tecnologia", label: "Tópicos especiais em tecnologia"},
                                    ]}/>
                            <Input 
                                name="cost" 
                                label="Custo da sua aula por hora"
                                value={cost}
                                onChange={(e) => { setCost(e.target.value)}}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>
                        {scheduleItems.map((schedeleItem, index) => {
                            return(
                                <div className="schedule-item" key={schedeleItem.week_day}>
                                    <Select name="week_day" 
                                        label="Dia da semana"
                                        value={schedeleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, "week_day", e.target.value)}
                                        options={[
                                            {value: "0", label: "Domingo"},
                                            {value: "1", label: "Segunda-feira"},
                                            {value: "2", label: "Terça-feira"},
                                            {value: "3", label: "Quarta-feira"},
                                            {value: "4", label: "Quinta-feira"},
                                            {value: "5", label: "Sexta-feira"},
                                            {value: "6", label: "Sábado"},
                                    ]}/>
                                    <Input 
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={schedeleItem.from}
                                        onChange={e => setScheduleItemValue(index, "from", e.target.value)}
                                    />
                                    
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={schedeleItem.to}
                                        onChange={e => setScheduleItemValue(index, "to", e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                        <img src={warningIcon} alt="Aviso importante"/> 
                        Importante! <br/>
                        Preencha todos os dados
                        </p>
                        <button type="submit" >Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm