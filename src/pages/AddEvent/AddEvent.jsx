import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddEvent = () => {
    useTitle('Add Event');

    const handleAddEvent = event => {
        event.preventDefault();

        const form = event.target;

        const eventName = form.eventName.value;
        const eventPhoto = form.eventPhoto.value;
        const eventStartDate = form.eventStartDate.value;
        const eventEndDate = form.eventEndDate.value;
        const eventDetails = form.eventDetails.value;

        const newEvent = { eventName, eventPhoto, eventStartDate, eventEndDate, eventDetails };

        fetch(`https://toy-marketplace-server-gray-beta.vercel.app/events`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Event Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    });

                    form.reset();
                }
            });
    }

    return (
        <div className="bg-yellow-100 py-20 px-4 lg:mx-0">
            <div className="max-w-4xl mx-auto p-10 pt-8 bg-base-100 border-2 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">Add Event</h2>
                <form onSubmit={handleAddEvent}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Event Name</span>
                            </label>
                            <input type="text" name="eventName" placeholder="Event Name" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Event Photo URL</span>
                            </label>
                            <input type="text" name="eventPhoto" placeholder="Photo URL Of The Event" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Event Start Date</span>
                            </label>
                            <input type="date" name="eventStartDate" placeholder="Event Start Date" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Event End Date</span>
                            </label>
                            <input type="date" name="eventEndDate" placeholder="Event End Date" className="input border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Event Details</span>
                        </label>
                        <textarea
                            name="eventDetails"
                            placeholder="Event Details"
                            className="textarea border-opacity-30 focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        >
                        </textarea>
                    </div>
                    <input
                        type="submit"
                        value="Add Event"
                        className="w-full mt-8 bg-green-600 text-white font-bold py-4 px-4 rounded-md
                         hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;