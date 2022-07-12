"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(m, n) {
        var _this = this;
        this.addP1Grade = function (p1g) {
            if (!_this.p1) {
                _this.p1 = p1g;
            }
        };
        this.addP2Grade = function (p2g) {
            if (!_this.p2) {
                _this.p2 = p2g;
            }
        };
        this.addP3Grade = function (p3g) {
            if (!_this.p3) {
                _this.p3 = p3g;
            }
        };
        this.addP4Grade = function (p4g) {
            if (!_this.p4) {
                _this.p4 = p4g;
            }
        };
        this.addT1Grade = function (t1g) {
            if (!_this.t1) {
                _this.t1 = t1g;
            }
        };
        this.addT2Grade = function (t2g) {
            if (!_this.t2) {
                _this.t2 = t2g;
            }
        };
        this.getGrades = function () {
            console.log("Grades of ".concat(_this.name, ":\nP1: ").concat(_this.p1, "\nP2: ").concat(_this.p2, "\nP3: ").concat(_this.p3, "\nP4: ").concat(_this.p4, "\nT1: ").concat(_this.t1, "\nT2: ").concat(_this.t2));
        };
        this.getTestAverageGrade = function () {
            var average = (_this.p1 + _this.p2 + _this.p3 + _this.p4) / 4;
            console.log("Test avg: ".concat(average));
        };
        this.getHomeworkAverageGrade = function () {
            var average = (_this.t1 + _this.t2) / 2;
            console.log("Homework avg: ".concat(average));
        };
        this.matricula = m;
        this.name = n;
        this.p1 = 0;
        this.p2 = 0;
        this.p3 = 0;
        this.p4 = 0;
        this.t1 = 0;
        this.t2 = 0;
    }
    return Student;
}());
exports.default = Student;
var pedrin = new Student(1, 'Pedrin');
pedrin.addP1Grade(1);
pedrin.addP2Grade(5);
pedrin.addP3Grade(8);
pedrin.addP4Grade(8);
pedrin.addT1Grade(3);
pedrin.addT2Grade(5.7);
pedrin.getGrades();
pedrin.getTestAverageGrade();
pedrin.getHomeworkAverageGrade();
