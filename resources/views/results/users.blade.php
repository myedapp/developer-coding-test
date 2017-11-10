<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MyEd User Results</title>

    <!-- Fonts -->
    {{--<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">--}}

    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">


</head>
<body>

<div id="app">
    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">User Results</h1>
            <p class="lead text-muted">Quest results for each individual user.</p>
            <input v-model="search_name" placeholder="Student Name">
        </div>
    </section>


    <div class="container" style="margin-top: 20px">
        @foreach($users as $user)
            <div class="card" style="margin-bottom: 20px" v-show="'{{ $user->name }}' == search_name">
                <div class="card-header">
                    <h6 style="margin: 0">{{ $user->name }}</h6>
                </div>
                <table class="table" style="margin-bottom: 0">
                    <thead>
                    <tr>
                        <th scope="col">Quest</th>
                        <th scope="col">Submitted</th>
                        <th scope="col">Completion</th>
                        <th scope="col">Mark</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($user->results as $result)
                        <tr>
                            <td>{{ $result->quest->name}}</td>
                            <td>{{ $result->submitted }}</td>
                            <td>{{ $result->completion }}</td>
                            <td>{{ $result->mark }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        @endforeach
    </div>
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
