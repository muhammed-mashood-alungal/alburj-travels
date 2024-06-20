const TopDeals = require("../models/topDealModel")

module.exports = {
    addDeal(DealDetails) {
        return new Promise((resolve, reject) => {
            TopDeals.create(DealDetails).then((response) => {
                resolve(response._id)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    getAllDeals() {
        return new Promise((resolve, reject) => {
            TopDeals.find().then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    getDealById(DealId) {
        return new Promise((resolve, reject) => {
            TopDeals.findById(DealId).then((details) => {
                resolve(details)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    updateDeals(dealId, updatedDetails) {

        const newDetails = {
            from: updatedDetails.from,
            to: updatedDetails.to,
            price: updatedDetails.price,
            airline: updatedDetails.airline,
            baggage: updatedDetails.baggage,
            description: updatedDetails.description

        }

        return new Promise((resolve, reject) => {
            TopDeals.findByIdAndUpdate(dealId, {
                $set: newDetails
            }).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    deleteDeal(dealId) {
        return new Promise((resolve, reject) => {
            {
                TopDeals.findByIdAndDelete(dealId).then((res) => {
                    {
                        resolve(res)
                    }
                }).catch((err) => {
                    reject(err)
                })
            }
        })
    }
}