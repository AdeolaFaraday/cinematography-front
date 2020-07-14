import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getMessages, deleteMessages } from "./apiAdmin";

const ManageMessages = () => {
    const [messages, setMessages] = useState([]);

    const { user, token } = isAuthenticated();

    const loadMessages = () => {
        getMessages(token).then(data => {
            if (data.err) {
                console.log(data.error);
            } else {
                setMessages(data);
            }
        });
    };

    const destroy = messagesId => {
        deleteMessages(messagesId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadMessages();
            }
        });
    };

    useEffect(() => {
        loadMessages();
    }, []);

    return (
		<section id="testimonial">
            <div style={{
                    height: '100px',
                    backgroundColor: "#000"
                }}>

            </div>
            <h2 className="text-center" style={{
                    marginTop: '35px',
                    marginBottom: '24px',
                    fontWeight: 700,
                    opacity: 0.75,
                    animation: "pulse 2.5s linear infinite"
                }}>
                Total {messages.length} message
            </h2>
            <hr />
                {messages.map((m, i) => (
          		<div class="container-fluid">
               		<div class="row dplay">

                         <div class="owl-theme owl-client">

                              <div>
                                   <div class="item container">
                                        
                                        <div class="tst-author">
                                             <h4>{m.name}</h4>
                                             <span>{m.email}</span> <hr/>
                                             <p>Subject: {m.subject}</p> <hr/>
                                             <p>Message: {m.message}</p> <hr/>
                                        </div>
                                   </div>
								   <span
                            onClick={() => destroy(m._id)}
                            className="badge badge-danger badge-pill"
                        		>
                            Delete
                        </span>
                     </div>
                 </div>

        	  </div>
			</div>
			))}
	 </section>
    );
};

export default ManageMessages;
