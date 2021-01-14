$(document).ready(function () {
    $("#content div").hide(); // Initially hide all content
    $("#tabs li:first").attr("id", "current"); // Activate first tab
    $("#content div:first").fadeIn(); // Show first tab content

    $('#tabs a').click(function (e) {
        e.preventDefault();
        $("#content div").hide(); //Hide all content
        $("#tabs li").attr("id", ""); //Reset id's
        $(this).parent().attr("id", "current"); // Activate this
        $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab
    });
});


/*
1. مساحة المثلث = area

محيط المثلث = مجموع اطوال اضلاعه
ثم يقسم المحيط على 2 لايجاد معامل y

مساحة المثلث = ^(y(y-الضلع الاول)(y-الضلع الثاني)(y-الضلع الثالث))
 */


function checkValue() {
    var a = 5,
        b = 6,
        c = 7;

    var y = (a + b + c) / 2;
    /*
    var d=y-a;
    var e=y-b;
    var f=y-c;
    var h = (y*d*e*f);
    */
    //var area = Math.sqrt(h);

    var area = Math.sqrt(y * (y - a) * (y - b) * (y - c));
    document.getElementById("areaValue").innerHTML = area;
}


//=============================================================
/*
2. اكتب برنامج جافا سكربت حيث يأخذ البرنامج عددًا صحيحًا عشوائيًا بين 1 إلى 10 ، ثم يُطلب من المستخدم إدخال رقم تخمين. إذا تطابق إدخال المستخدم مع رقم التخمين ، فسيعرض البرنامج رسالة 'العمل الجيد' وإلا يعرض رسالة 'غير متطابق
*/

function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById("e2Input").value;
    var feedback = document.getElementById("feedback");

    if (i == x) {
        feedback.innerHTML = "Good Work";
    } else {
        feedback.innerHTML = "Not matched";
    }

}



//=============================================================

/*
3. اكتب برنامج جافا سكربت لحساب الضرب وتقسيم رقمين (إدخال من المستخدم
*/
function clear() {
    var num1 = (document.getElementById("e3Input1").value) = "";
    var num2 = (document.getElementById("e3Input2").value) = "";

}

function multiply() {
    var num1 = document.getElementById("e3Input1").value;
    var num2 = document.getElementById("e3Input2").value;
    document.getElementById("result").innerHTML = num1 * num2;
    clear();
}

function divide() {
    var num1 = document.getElementById("e3Input1").value;
    var num2 = document.getElementById("e3Input2").value;
    document.getElementById("result").innerHTML = num1 / num2;
    clear();
}



//=============================================================
/*
4. اكتب برنامج جافا سكربت لتحويل درجات الحرارة من وإلى فهرنهايت.
[الصيغة: c / 5 = (f-32) / 9 [حيث c = درجة الحرارة في مئوية و f = درجة الحرارة في فهرنهايت]
الناتج المتوقع: 60 درجة مئوية هو 140 درجة فهرنهايت
45 درجة فهرنهايت هي 7.222222222222222 درجة مئوية
c = (5(f - 32))/9
f = (9c + (32*5))/5
*/

function fToC() {
    var f = document.getElementById("e4Input1").value;
    var c = (5 * (f - 32)) / 9;
    document.getElementById("outCel").innerHTML = c;
}

function cToF() {
    var c = document.getElementById("e4Input2").value;
    var f = (9 * c + (32 * 5)) / 5;
    document.getElementById("outFahr").innerHTML = f;
}



//=============================================================
/*
5. اكتب تمرين جافا سكربت للحصول على امتداد اسم ملف
*/
function pathCheck() {
    var path = document.getElementById("filePath").value;
    var pathSplit = path.split('.').pop();
    document.getElementById("pathValue").innerHTML = pathSplit;
}




//===============================================================
/*
6. اكتب برنامج جافا سكربت للحصول على الفرق بين رقم معين و 13 ، إذا كان الرقم أكبر من 13 ، فقم بإرجاع الفارق المطلق
*/

function compare() {
    var num = document.getElementById("e6Input").value;
    if (num <= 13) {
        compNum = 13 - num;
    } else {
        compNum = (num - 13) * 2;
    }
    document.getElementById("compareNum").innerHTML = compNum;
}




//===============================================================
/*
7. اكتب برنامج جافا سكربت لحساب مجموع الأعداد الصحيحة المعطاة. إذا كانت القيمتان متماثلتين ، فقم بإرجاع ثلاثة أضعاف مجموعهما
*/

function calc() {
    var num1 = parseInt(document.getElementById("e7Input1").value);
    var num2 = parseInt(document.getElementById("e7Input2").value);

    if (num1 == num2) {
        document.getElementById("e7Result").innerHTML = 3 * (num1 + num2);
    } else {
        document.getElementById("e7Result").innerHTML = num1 + num2;
    }
}




//===============================================================
/*
8. اكتب برنامج جافا سكربت للتحقق من رقمين معينين وإرجاع صحيح إذا كان أحدهما هو 50 أو إذا كان المجموع هو 50
*/

function calculate() {
    var num1 =parseInt(document.getElementById("e8Input1").value);
    var num2 =parseInt(document.getElementById("e8Input2").value);

    if (num1 + num2 == 50) {
        document.getElementById("e8result").innerHTML = true;
    }
    else if (num1 == 50 || num2 == 50){
        document.getElementById("e8result").innerHTML = true;
    }
    else {
        document.getElementById("e8result").innerHTML = false;
    }
}




//===============================================================
/*
9- اكتب برنامج جافاسكربت للتحقق من عدد صحيح معين في غضون 20 من 100 أو 400
*/





//===============================================================
/*
10. اكتب برنامج جافا سكربت للتحقق من رقمين صحيحين ، إذا كان أحدهما إيجابي والآخر سالب.
*/

function e10check() {
    var num1 =parseInt(document.getElementById("e10Input1").value);
    var num2 =parseInt(document.getElementById("e10Input2").value);

    if (num1 > 0 && num2 < 0) {
        document.getElementById("e10result").innerHTML = true;
    }
    else if (num1 < 0 && num2 > 0){
        document.getElementById("e10result").innerHTML = true;
    }
    else {
        document.getElementById("e10result").innerHTML = false;
    }
}




//===============================================================
/*
11. اكتب برنامج جافا سكربت للتحقق مما إذا كانت هناك قيمتان صحيحتان معينتان في النطاق 50..99 (ضمنيًا). عودة صحيح إذا كان أي منهما في النطاق المذكور
*/

function e11Check(){
    var num1 = parseInt(document.getElementById("e11Input1").value);
    var num2 = parseInt(document.getElementById("e11Input2").value);
    if ((num1>=50 && num1<=99) || (num2>=50 && num2<=99)){
        document.getElementById("e11Result").innerHTML = true;
    }
    else{
        document.getElementById("e11Result").innerHTML = false;
    }
}




//===============================================================
/*
12. اكتب برنامج جافا سكربت للعثور على أكبر عدد من الأعداد الصحيحة الثلاثة
*/

function e12Check(){
    var num1 = document.getElementById("e12Input1").value;
    var num2 = document.getElementById("e12Input2").value;
    var num3 = document.getElementById("e12Input3").value;
    
    var maxValue = Math.max(num1,num2,num3);

    document.getElementById("e12Result").innerHTML = ("Max Value = " + maxValue);
}




//===============================================================
/*
13. اكتب برنامج جافا سكربت للتحقق مما إذا كان الرقمان في النطاق 40..60 أو في النطاق 70..100 ضمناً
*/

function e13Check(){
    var num1 = document.getElementById("e13Input1").value;
    var num2 = document.getElementById("e13Input2").value;

    if ((num1>=40 && num1<=60) || (num1>=70 && num1<=100) && (num2>=40 && num2<=60) || (num2>=70 && num2<=100)){
        document.getElementById("e13Result").innerHTML = true;
    }
    else{
        document.getElementById("e13Result").innerHTML = "you should enter numbers between (40-60) or(70-100)";
    }
}




//===============================================================
/*
14- كتابة برنامج جافا سكريبت لحساب مجموع ثلاثة عناصر من مجموعة معينة من الأعداد الصحيحة من طول 3
*/
