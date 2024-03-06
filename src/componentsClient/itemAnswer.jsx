import { Textarea } from '@material-tailwind/react';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_URL, doApiMethod } from '../services/apiService';

function ItemAnswer(props) {
    // const dispatch = useDispatch();
    let item = props.item;
    console.log(item);
    let thisQuestion = { question: "", aiAnswer: "", userAnswer: "" };
    // const newIntervew = useSelector(state => state.newIntervewSlics.newIntervew);

    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        let url = API_URL + "/questions/" + item;
        try {
            let resData = await doApiGet(url);
            let data = resData.data
            thisQuestion.question = data.question;
        } catch (error) {
            console.log(error);
        }
    }

    const addAnswer = () => {
        doApiAddAnswer(thisQuestion)
    }

    const doApiAddAnswer = async (_dataBody) => {
        let url = API_URL + "/questions/" + item;
        try {
            let resp = await doApiMethod(url, "PUT", _dataBody);
            console.log(resp);
            console.log(resp.data);
            // if (resp.data._id) {
            //     // dispatch(addNewIntervew({ newIntervew: resp.data }));
            //     // nav("/Interview");
            //     console.log("test");
            // }
        }
        catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3 underline" style={{ fontSize: '16px' }}>{thisQuestion.question}</h2>
            <div className="flex flex-col items-center w-[32rem] mx-auto">
                <Textarea variant="static" placeholder="Your Answer..." rows={8} />
            </div>
            <div className="mb-3">
                <button onClick={() => addAnswer()} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">Next</button>
            </div>
        </>
    )
}

export default ItemAnswer