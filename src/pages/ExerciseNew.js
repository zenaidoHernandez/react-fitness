import React from 'react'
import Card from '../components/Card'
import ExerciseForm from '../components/ExerciseForm'

const ExerciseNew = ({form, onChange, onSubmit}) => (
    <div className="row">
        <div className="col-sm">
            <Card {...form}/>
        </div>
        <div className="col-sm">
            <ExerciseForm
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    </div>
)


export default ExerciseNew