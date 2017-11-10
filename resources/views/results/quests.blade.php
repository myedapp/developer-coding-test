<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MyEd Quest Results</title>

    <!-- Fonts -->
    {{--<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">--}}

    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">


</head>
<body>

<div id="app">
    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">Quest Results</h1>
            <p class="lead text-muted">User results for each quest.</p>
        </div>
    </section>

    <div class="container" style="margin-top: 20px">
        @foreach($quests as $quest)
            <div class="card" style="margin-bottom: 20px">
                <div class="card-header">
                    <h6 style="margin: 0">{{  $quest->name }}</h6>
                </div>
                <table class="table" style="margin-bottom: 0">
                    <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Submitted</th>
                        <th scope="col">Completion</th>
                        <th scope="col">Mark</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($quest->results as $result)
                        <tr>
                            <td>{{ $result->user->name }}</td>
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
