/**
 * Component template.
 * 
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPet, requestPets } from '../actions'
import * as s from '../selectors'

const Example: React.FC = () => {
	const dispatch = useDispatch()

	/* Load pets when the component is mounted */
	React.useEffect(() => {
		dispatch(requestPets.started(undefined))
	}, [dispatch])

	const saving = useSelector(s.selectSaving)
	const error = useSelector(s.selectError)
	const pets = useSelector(s.selectPets)

	function onLoadPets(evt: React.MouseEvent) {
		evt.preventDefault()
		dispatch(requestPets.started(undefined))
	}

	function onAddPet(evt: React.MouseEvent) {
		evt.preventDefault()
		dispatch(addPet.started({
			name: 'test',
			photoUrls: [''],
		}))
	}

	return (
		<div>
			<h1>Petstore</h1>
			<p>
				<button onClick={onLoadPets}>Reload</button>
                    &nbsp;
				<button onClick={onAddPet}>Add Pet</button>
				{saving && (
					<span>Saving&hellip;</span>
				)}
			</p>
			{error && (
				<p style={{ color: 'red' }}>{error.message}</p>
			)}
			{!!pets.length && (
				<table style={{ margin: '0 auto', width: '60%' }}>
					<thead>
						<tr>
							<th>Pet</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{pets.filter((pet, index) => index < 20)
							.map((pet, index) => (
								<tr key={index}>
									<td>{pet.name}</td>
									<td>{pet.status}</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Example
