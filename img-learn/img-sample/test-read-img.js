var getPlantsInfo = require('./read-img').getPlantsInfo

getPlantsInfo('./训练样本', function(plantsInfos) {
    console.log(plantsInfos)
})
getPlantsInfo('./测试样本', function(plantsInfos) {
    console.log(plantsInfos)
})
