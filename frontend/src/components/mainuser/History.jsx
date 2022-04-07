import React, { useState, useEffect } from 'react'
import pastOrderService from '../../services/pastOrder.service';

export const History = () => {
    const options = [
        {id: 'all', name: 'All sequences'},
        {id: 'active', name: 'Active'},
        {id: 'expired', name: 'Expired'},
    ];

    const onOptionChange = (option) => {
        setSelectedStatus(option);
    }

    const [selectedStatus, setSelectedStatus] = useState(options[0]);
    const [pastOrdersList, setPastOrdersList] = useState([]);
    const loadPastOrders = (option) => {

    };
    useEffect(() => {
        loadPastOrders(selectedStatus.id);
    }, [selectedStatus]);

    const [showAddPastOrderForm, setShowAddPastOrderForm ] = useState(false);
    const toggleShowAddPastOrderForm = () => {
        setShowAddPastOrderForm(!showAddPastOrderForm);
    }

    const onPastOrderAdded = (pastOrder) => {
        pastOrderService.addNewPastOrder(pastOrder).then(() => {
            loadPastOrders(selectedStatus.id);
            toggleShowAddPastOrderForm();
        });
    };
    
    const onPastOrderEdited = (pastOrder) => {
        pastOrderService.updatePastOrder(pastOrder).then(() => {
            loadPastOrders(selectedStatus.id);
        });
    };
    
    const onPastOrderDeleted = (pastOrder) => {
        pastOrderService.deletePastOrder(pastOrder).then(() => {
            loadPastOrders(selectedStatus.id);
        });
    };
    
    return (
        <div>
            <div className='header padding-8px'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedStatus.name}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {options.map((option) => (
                            <li key={option.id}>
                                <div className='dropdown-item' onClick={() => onOptionChange(option)}>
                                    {option.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type='button' className={showAddPastOrderForm ? 'btn btn-primary' : 'btn btn-secondary'} onClick={toggleShowAddPastOrderForm}>Ehhh</button>
            </div>
            {showAddPastOrderForm ?
                <div className="padding-8px">
                    {/* <AddAmbulanceCallForm onAmbulanceCallAdded={onAmbulanceCallAdded} onCancel={toggleShowAddAmbulanceCallForm}/> */}
                    IDK
                </div>
                : null
            }
            {pastOrderList.length !== 0 ?
                <div className="list">
                    {pastOrderList.map((pastOrder) => (
                        // <AmbulanceCall key={pastOrder.id} pastOrder={pastOrder} onDelete={() => onPastOrderDeleted(pastOrder)} onEdit={(editedPastOrder) => onPastOrderEdited(editedPastOrder)} />
                        "asd"
                    ))}
                </div>
                : 'No past orders to display'
            }
        </div>
    )
}

export default History;
