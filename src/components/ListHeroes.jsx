import React, { useEffect, useState } from 'react'
import { httpClient } from "../utils/api"
import { ProgressBar } from 'react-bootstrap'

export default function ListHeroes() {

    const [heroes, setHeroes] = useState([])

    /**
     * Get superheroes
     */
    const getListSuperheroes = async () => {
        try {
            const request = await httpClient('all')
            console.log(request)
            if (request) {
                if (request) {
                    setHeroes(request)
                } else {
                    const errorMessage = {
                        response: {
                            data: request
                        }
                    }
                    throw errorMessage
                }
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    /**
     * Calling function getListSuperheroes
     */
    useEffect(() => {
        getListSuperheroes()
    }, [])

    /**
     * render loading list superheroes
     */
    const renderLoadingListSuperheroes = () => {
        return (
            <div className="col-12 my-4 text-center">
                <p>Loading...</p>
            </div>
        )
    }

    /**
     * render list superheroes
     */
    const renderListSuperheroes = () => {
        return heroes.map((hero, index) => {
            return (
                <div className="col-sm-6 col-md-4 col-lg-3 my-4" key={ index }>
                    <div className="card">
                        <img className="card-img-top" src={ hero.images.sm } />
                        <div className="card-block p-2">
                            <h5 className="text-bol">{ hero.name }</h5>
                            <label>intelligence : </label>
                            <ProgressBar 
                                now={ hero.powerstats.intelligence } 
                                label={ hero.powerstats.intelligence + "%" } 
                                variant="success" 
                                animated 
                            />
                            <label>strength : </label>
                            <ProgressBar 
                                now={ hero.powerstats.strength } 
                                label={ hero.powerstats.strength + "%" } 
                                variant="primary" 
                                animated 
                            />
                            <label>speed : </label>
                            <ProgressBar 
                                now={ hero.powerstats.speed } 
                                label={ hero.powerstats.speed + "%" } 
                                variant="danger" 
                                animated 
                            />
                            <label>durability : </label>
                            <ProgressBar 
                                now={ hero.powerstats.durability } 
                                label={ hero.powerstats.durability + "%" } 
                                variant="info" 
                                animated 
                            />
                            <label>power : </label>
                            <ProgressBar 
                                now={ hero.powerstats.power } 
                                label={ hero.powerstats.power + "%" } 
                                variant="secondary" 
                                animated 
                            />
                            <label>combat : </label>
                            <ProgressBar 
                                now={ hero.powerstats.combat } 
                                label={ hero.powerstats.combat + "%" } 
                                variant="dark" 
                                animated 
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div className="row">
                { heroes.length == 0 ? renderLoadingListSuperheroes() : renderListSuperheroes() }
            </div>
        </div>
    )
}
