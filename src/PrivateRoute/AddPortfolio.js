import React, {useState, useEffect} from 'react';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import {createPortfolio} from './apiAdmin';

const AddPortfolio = () => {
    const [values, setValues] = useState({
        link: '',
        description: '',
        photo: '',
        loading: false,
        error: '',
        createdPortfolio: '',
        redirectToProfile: false,
        formData: ''
    })



    const {user, token} = isAuthenticated()

    const {
        link,
        description,
        loading,
        error,
        createdPortfolio,
        redirectToProfile,
        formData
    } = values

        // load categories and set form data
        const init = () => {
                    setValues({
                        ...values,
                        formData: new FormData()
                    });
        };

    useEffect(() => {
        init()
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        createPortfolio(token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    link: '',
                    error: '',
                    description: '',
                    photo: '',
                    loading: false,
                    createdPortfolio: data.name
                });
            }
        });
    };


    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-secondary">
                <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
            </label>
        </div>

        <div className="form-group">
            <label className="text-muted">link</label>
            <input onChange={handleChange('link')} type="text" className="form-control" value={link} />
        </div>

        <div className="form-group">
            <label className="text-muted">Description</label>
            <textarea onChange={handleChange('description')} placeholder="Little description (optional)" className="form-control" value={description} />
        </div>
        {showSuccess()}
        <button className="btn btn-outline-primary">Create Portfolio</button>
    </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdPortfolio ? '' : 'none' }}>
            <h5>{`${createdPortfolio}`} is created!</h5>
        </div>
    )

    const showLoading = () =>
    loading && (
        <div className="alert alert-success">
            <h5>Loading...</h5>
        </div>
    )

    return (
        <div>
        <div style={{
            height: '100px',
            backgroundColor: "#000"
        }}>

    </div>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
            {newPostForm()}
            </div>
        </div>
    </div>
    </div>
    )
}

export default AddPortfolio;
