import React, { useContext, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import Loader from 'react-js-loader';
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitSuccessful },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef(null);
    const [done, setDone] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loader, setLoader] = useState(false);

    const onSubmit = async () => {
        setLoader(true);
        setDone(false);
        const result = await emailjs.sendForm('service_6y58bjy', 'template_t7n2tgm', form.current, 'vptnb3qCNdpKREY9i');
        setLoader(false);
        if (result.text === 'OK') {
            setDone(true);
        }
    };

    useEffect(() => {
        reset();
        setTimeout(() => {
            setIsDisabled(true);
        }, 600);
    }, [reset, isSubmitSuccessful]);

    useEffect(() => {
        if (Object.entries(errors).length) {
            setIsDisabled(true);
        } else if (isValid) {
            setIsDisabled(false);
        }
    }, [isValid, errors]);

    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="input-name">
                        <input
                            type="text"
                            className="user"
                            placeholder="Your name..."
                            {...register('name', { required: true, pattern: /^[A-Za-zА-Яа-я]+$/i })}
                        />
                        {errors.name?.type === 'required' && (
                            <span style={{ color: 'red' }}>Name should not be empty</span>
                        )}
                        {errors.name?.type === 'pattern' && (
                            <span style={{ color: 'red' }}>Name should include letters only</span>
                        )}
                    </div>
                    <div className="input-email">
                        <input
                            type="email"
                            className="user"
                            placeholder="Your email..."
                            {...register('email', {
                                required: true,
                                pattern: /[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                            })}
                        />
                        {errors.email?.type === 'required' && (
                            <span style={{ color: 'red' }}>Email should not be empty</span>
                        )}
                        {errors.email?.type === 'pattern' && <span style={{ color: 'red' }}>email is invalid</span>}
                    </div>
                    <div className="input-message">
                        <textarea
                            className="user"
                            placeholder="Your message..."
                            {...register('message', { required: true })}
                        />
                        {errors.message?.type === 'required' && (
                            <span style={{ color: 'red' }}>Message should not be empty</span>
                        )}
                    </div>
                    <input type="submit" value="Send" className="button" disabled={isDisabled} />
                    {loader && <Loader type="spinner-circle" bgColor={'#FCA61F'} size={80} />}
                    <span>{done && 'Thanks for contacting me!'}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
