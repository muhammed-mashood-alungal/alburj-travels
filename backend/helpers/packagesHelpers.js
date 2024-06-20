const packages = require("../models/packagesModel");

module.exports = {
    addPackage(packageDetails) {
        return new Promise((resolve, reject) => {
            packages.create(packageDetails)
                .then((savedDetails) => {
                    console.log(savedDetails)
                    resolve(savedDetails._id)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    getAllPackages() {
        return new Promise(async (resolve, reject) => {
            const allPackages = await packages.find()
            if (allPackages) {
                resolve(allPackages)
            } else {
                reject("No Packages in Collection")
            }

        })
    },
    updatePackage(packageId, updatedDetails) {
        const newData = {
            name: updatedDetails.name,
            destination: updatedDetails.destination,
            price: updatedDetails.price,
            description: updatedDetails.description,
            days: updatedDetails.days,
            nights: updatedDetails.nights,
            activities: updatedDetails.activities
        }

        return new Promise((resolve, reject) => {
            packages.findByIdAndUpdate(packageId,
                { $set: newData }
            ).then((response) => {
                resolve()
            }).catch((err) => {
                reject(err)
            })
        })
    },
    getPackageById(packageId) {
        return new Promise((resolve, reject) => {
            packages.findById(packageId).then((packageDetails) => {
                resolve(packageDetails)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    deletePackage(packageId) {
        return new Promise((resolve, reject) => {
            packages.findByIdAndDelete(packageId).then((response) => {
                resolve(response)
            }).catch((err) => {
                {
                    reject(err)
                }
            })
        })
    }
}