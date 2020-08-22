import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from "../../components/TeacherItem"
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'
import "./styles.css"

function TeacherList(){
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState("")
    const [week_day, setWeekDay] = useState("")
    const [time, setTime] = useState("")

    async function handleSearchTeachers(e: FormEvent){
        e.preventDefault()

        const response = await api.get("classes", {
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                    <Select name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
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
                    <Select name="week_day" 
                        label="Dia da semana" 
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
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
                        type="time" 
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}    
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList