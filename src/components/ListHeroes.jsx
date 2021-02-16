import imageOne from '../assets/img/01.jpg'
import imageTwo from '../assets/img/02.jpg'
import React, { useEffect, useState } from 'react'
import { httpClient } from "../utils/api"

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
     * render list superheroes
     */
    const renderListSuperheroes = () => {
        return heroes.map((hero, index) => {
            return (
                <div className="col-sm-6 col-md-4 col-lg-3 my-4">
                    <div className="card">
                        <img className="card-img-top" src={ hero.images.sm } />
                        <div className="card-block">
                            <h5 className="text-bold p-2">{ hero.name }</h5>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div className="row">
                { renderListSuperheroes() }
            </div>
        </div>
    )
}
