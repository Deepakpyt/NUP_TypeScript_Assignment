var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Status;
(function (Status) {
    Status[Status["Varified"] = 0] = "Varified";
    Status[Status["Unvarified"] = 1] = "Unvarified";
})(Status || (Status = {}));
var User = /** @class */ (function () {
    function User() {
        this.firstnameElement = document.getElementById("first-name");
        this.lastnameElement = document.getElementById("last-name");
        this.emailElement = document.getElementById("email");
        this.passwordElement = document.getElementById("password");
    }
    User.prototype.varifyData = function () {
        var _a, _b, _c, _d;
        // console.log(this.firstnameElement,"first name")
        var firstName = (_a = this.firstnameElement) === null || _a === void 0 ? void 0 : _a.value.trim();
        var lastname = (_b = this.lastnameElement) === null || _b === void 0 ? void 0 : _b.value.trim();
        var email = (_c = this.emailElement) === null || _c === void 0 ? void 0 : _c.value.trim();
        var password = (_d = this.passwordElement) === null || _d === void 0 ? void 0 : _d.value.trim();
        if (nameVarified(firstName, lastname) && emailVarified(email) && passVarified(password)) {
            return Status.Varified;
        }
        return Status.Unvarified;
    };
    return User;
}());
function nameVarified(firstName, lastName) {
    if (firstName === '' && lastName === '') {
        console.log(firstName);
        alert("First Name and Last Name cannot be empty.");
        return false;
    }
    return true;
}
function emailVarified(email) {
    var emailPattern = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    if (email === '' || email === null || email === undefined) {
        alert("Email field Cannot be empty");
        return false;
    }
    else if (!emailPattern.test(email)) {
        alert("Not a valid emailID");
        return false;
    }
    else {
        return true;
    }
}
function passVarified(password) {
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password === '' || password === null || password === undefined) {
        alert("Password field cannot be empty.");
        return false;
    }
    else if (!passwordPattern.test(password)) {
        alert("Password must have least one number, one lowercase and one uppercase letter,at least six characters.");
        return false;
    }
    else {
        return true;
    }
}
function varifyUser() {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, varifying;
        return __generator(this, function (_a) {
            newUser = new User();
            varifying = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (newUser.varifyData() === Status.Unvarified) {
                        reject(new Error("There is some discrepency in user Data. Unabele to sign up"));
                    }
                    else {
                        resolve();
                    }
                }, 3000);
            });
            return [2 /*return*/, varifying];
        });
    });
}
// async function waitForVarification(ms : number){
//     setTimeout(varifyUser, ms)
// }
function showLoader() {
    var loaderElement = document.getElementById("loader");
    if (loaderElement) {
        // console.log(loaderElement)
        loaderElement.innerHTML = "Loading....";
        //   console.log(loaderElement)
    }
}
function hideLoader() {
    var loaderElement = document.getElementById("loader");
    if (loaderElement) {
        loaderElement.innerHTML = '';
    }
}
function formValidator() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    showLoader();
                    console.log("loding");
                    return [4 /*yield*/, varifyUser()];
                case 1:
                    _a.sent();
                    alert("User Signed up successfully.");
                    return [3 /*break*/, 4];
                case 2:
                    err_1 = _a.sent();
                    alert(err_1);
                    return [3 /*break*/, 4];
                case 3:
                    console.log("loding completed");
                    hideLoader();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
