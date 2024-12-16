import React from "react";
import '../assets/styles/tailwind.css';

const FAQPage: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white min-h-screen p-8">
            {/* Левая часть: Заголовок, текст и кнопка */}
            <div className="md:w-1/2 w-full px-16 flex flex-col justify-center">
                <p className="text-lg font-medium text-black mb-2">
                    Most Questions
                </p>
                <h2 className="text-5xl font-bold text-purple-900 mb-6 leading-tight">
                    Frequently
                    <br />
                    Asked Question
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our e-learning platform offers a personalized and interactive learning
                    experience. Explore courses designed by experts and powered by cutting-edge
                    technology to help you achieve your goals.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 w-1/3">
                    Contact Us
                </button>
            </div>

            {/* Правая часть: Аккордеон */}
            <div className="md:w-1/2 w-full px-6 flex flex-col justify-center">
                <div className="space-y-4">
                    <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg">
                        <input type="radio" name="accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium text-black">
                            What courses do you offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-700">
                                We offer courses in programming, web development, data science,
                                design, and business skills.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg">
                        <input type="radio" name="accordion" />
                        <div className="collapse-title text-xl font-medium text-black">
                            How can I enroll in a course?
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-700">
                                You can enroll by visiting our course catalog and clicking the
                                "Enroll Now" button.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg">
                        <input type="radio" name="accordion" />
                        <div className="collapse-title text-xl font-medium text-black">
                            Do you provide certificates?
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-700">
                                Yes, you will receive a certificate of completion for every course
                                you finish.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg">
                        <input type="radio" name="accordion" />
                        <div className="collapse-title text-xl font-medium text-black">
                            Do you provide certificates?
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-700">
                                Yes, you will receive a certificate of completion for every course
                                you finish.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white shadow-lg rounded-lg">
                        <input type="radio" name="accordion" />
                        <div className="collapse-title text-xl font-medium text-black">
                            Can I access courses after completion?
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-700">
                                Yes! Once enrolled, you will have lifetime access to the course
                                materials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
